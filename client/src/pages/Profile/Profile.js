import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_POSTS_BY_USER } from "../../utils/queries";
import Login from "../../components/Login";

import { Link } from "react-router-dom";

import PostCard from "../../components/PostCard/PostCard";

function ProfilePage({ currentUser, currentUserPet, updatePetName }) {
  const [petName, setPetName] = useState(currentUserPet);

  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; 

  const {loading: postsLoading, error, data: postsData} = useQuery(QUERY_POSTS_BY_USER,
    {
      variables: {
        userID: me._id
      }
    }
  );

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  const handleUpdatePetName = (e) => {
    e.preventDefault();
    updatePetName(petName);
    console.log(`Pet name updated to: ${petName}`);
  };

  const posts = postsData?.posts_by_user;

  return (
    <div className="page">
      {/* <h1>{currentUser}'s Profile</h1> */}
      {/* <h2>Pet: {currentUserPet}</h2> */}
      <form onSubmit={handleUpdatePetName}>
        <label>
          Change Pet Name:
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <h2>Posts</h2>
      <div>
        {posts && 
          posts.map((post) => (
            <div key={post._id}>
              <PostCard 
                postsData={post}
              />
              <Link
                to={`/posts/${post._id}`}
                style={{ textDecoration: 'none' }}>
                <p className='light-text'>View and leave comments</p>
              </Link>
            </div>
        ))}
      </div>
      {/* {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))} */}
    </div>
  );
}

export default ProfilePage;