import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { QUERY_PET } from "../../utils/queries";
import { QUERY_USER } from "../../utils/queries";
// import mongoose from 'mongoose';

import Login from "../../components/Login";
// import EditPet
import PostCard from "../../components/PostCard/PostCard";

import Auth from '../../utils/auth';
import { Link } from "react-router-dom";

function ProfilePage(props) {
  const { posts } = props;
  console.log('>>> logging posts: ', posts);

  const userPosts = posts.filter(
    post => post.postAuthor._id === Auth.getUser().data._id
  );
  console.log('>>> logging userPosts: ', userPosts);

  const post = userPosts[0];
  console.log(post);
  // console.log(post.postAuthor.name);

  // Get user info with petId:
  // const { loadingUser, userData } = useQuery(QUERY_USER, {
  //   // pass URL parameter
  //   variables: { userId: new Types.ObjectId('578df3efb618f5141202a196') },
  // });

  // const user = userData ? userData.user : [];
  // console.log(user);
  // console.log('auth...: ', Auth.getUser().data._id)
  // console.log(typeof(Auth.getUser().data._id))

  // Get pet info:
  // const { loadingPet, petData } = useQuery(QUERY_PET, {
  //   // pass petId from userPosts[0].postAuthor.pet._id
  //   variables: { petId: "63e04e28e660608f2b2eda05" },
  // });

  // console.log(userPosts[0].postAuthor.pet._id);
  // console.log(typeof(userPosts[0].postAuthor.pet._id))
  // console.log(petData);
  // const pet = petData ? petData.pet : [];
  // console.log(pet);

  // Authenticate user:
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; 

  if (me.length === 0) {
    return (
      <Login />
    )
  };

  return (
    <div className="flex-column page negative-top-margin">
      <div className="text-primary">
        <h1>✨ Welcome, <span className="text-pink">{me.name} ✨</span></h1>
      </div>
      {/* <div className="text-left">
        <h2>🪪 Your Pet Profile</h2>
      </div>
      <div className="pet-info-card mt-5 flex-column">
        {post.postAuthor.pet.petName ? (
          <div className="flex-row mb-2">
            <h4 className="text-info-field text-info">Name: </h4>
            <span className="ml-5">
              <h4>{post.postAuthor.pet.petName}</h4>
            </span>
          </div>
        ) : (
          <div className="display-none"></div>
        )}
        {post.postAuthor.pet.petAge ? (
          <div className="flex-row mb-2">
            <h4 className="text-info-field text-info">Age: </h4>
            <span className="ml-5">
              <h4>{post.postAuthor.pet.petAge}</h4>
            </span>
          </div>
        ) : (
          <div className="display-none"></div>
        )}
        {post.postAuthor.pet.petType ? (
          <div className="flex-row mb-2">
            <h4 className="text-info-field text-info">Type: </h4>
            <span className="ml-5">
              <h4>{post.postAuthor.pet.petType}</h4>
            </span>
          </div>
        ) : (
          <div className="display-none"></div>
        )}
        {post.postAuthor.pet.petBreed ? (
          <div className="flex-row mb-2">
            <h4 className="text-info-field text-info">Breed: </h4>
            <span className="ml-5">
              <h4>{post.postAuthor.pet.petBreed}</h4>
            </span>
          </div>
        ) : (
          <div className="display-none"></div>
        )}
        {post.postAuthor.pet.petFavFood ? (
          <div className="flex-row mb-2">
            <h4 className="text-info-field text-info">FavFood: </h4>
            <span className="ml-5">
              <h4>{post.postAuthor.pet.petFavFood}</h4>
            </span>
          </div>
        ) : (
          <div className="display-none"></div>
        )}
        {post.postAuthor.pet.petFavActivities ? (
          <div className="flex-row mb-2">
            <h4 className="text-info-field text-info">FavActivities: </h4>
            <span className="ml-5">
              <h4>{post.postAuthor.pet.petFavActivities}</h4>
            </span>
          </div>
        ) : (
          <div className="display-none"></div>
        )}
        {post.postAuthor.pet.petBio ? (
          <div className="flex-row">
            <h4 className="text-info-field text-info">Bio: </h4>
            <span className="ml-5">
              <h4>{post.postAuthor.pet.petBio}</h4>
            </span>
          </div>
        ) : (
          <div className="display-none"></div>
        )}
      
      </div> */}
      <div className="text-left mt-5">
        <h2>🖼️ Your Posts</h2>
      </div>
      {userPosts.length > 0 ? userPosts.map((post) => (
        <div className="row">
          <div key={post._id} className='app-postcard_page ml-2 my-5 px-6 py-5'>
            <PostCard 
              postsData={post}
            />
            <Link className='' to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>
              <p className='light-text'>View post and leave comments</p>
            </Link>
          </div>
        </div>
      )) : (
        <div>
         <p>No post yet. Create your first post <a href="/create" className="no-underline text-link">here</a>!</p>
        </div>
      )}
      {/* <h2>Welcome, <span>{posts.postAuthor.name}</span></h2> */}
    </div>
  );
}

export default ProfilePage;