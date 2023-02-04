import React from 'react';
import { useState } from 'react';
import CloudinaryUploadWidget from '../Cloudinary/UploadWidget';

export default function PostCard(props) {
  
  const { postsData } = props;
  return (
    <div>
      <h4>{postsData.postAuthor.name}</h4>
      <p>{postsData.createdAt}</p>
      {/* Render uploaded image from Cloudinary: */}
      <img id="uploadedimage" src={postsData.postImageURL} width={500}></img>
      <p><span className='username'>{postsData.postAuthor.name}</span> {postsData.postText}</p>
      {/* <p className='light-text'>View all comments</p> */}
      {/* <p><span className='username'>{postsData.comments.commentAuthor.name}</span> {postsData.comments.commentText}</p> */}
      {/* TODO: add comments later */}
    </div>
  )
}
