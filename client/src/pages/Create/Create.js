import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { QUERY_POSTS } from "../../utils/queries";
import { ADD_POST } from "../../utils/mutations";
import CloudinaryUploadWidget from "../../components/Cloudinary/UploadWidget"; 

import Auth from '../../utils/auth';

function CreatePostPage() {
  const [postText, setPostText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [postImageURL, setPostImageURL] = useState("");

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      // NOTE: Must QUERY_POSTS somewhere else before reading the cache.
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        console.log('posts: ', posts);
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('postImageURL: ', postImageURL);
      const { data } = await addPost({
        variables: {
          postText,
          postImageURL,
          postAuthor: Auth.getUser().data._id,
        },
      });
      
      setPostText('');
      window.location.replace('/');
    } catch (error) {
      console.error('>>> handleSubmit error: ', error);
    }
    setPostText("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  }

  return (
    <div className="app-postcard_page page create-form-card flex-column align-start">
      <div className="text-center mb-5">
        <h2>📝 Create a Post</h2>
      </div>
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
      </p>
      <form onSubmit={handleSubmit}>
        <CloudinaryUploadWidget setPostImageURL={setPostImageURL} />
        <br />
        <textarea
          name="postText"
          placeholder="Enter post text"
          value={postText}
          onChange={handleInputChange}
        />
        <br />
        <button className="btn btn-info" type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePostPage;