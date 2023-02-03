import React from 'react'

export default function PostCard(props) {
  const { postsData } = props;
  return (
    <div>
      <h4>{postsData.postAuthor.name}</h4>
      <p>{postsData.postText}</p>
      {/* TODO: add createdAt and comments later */}
    </div>
  )
}
