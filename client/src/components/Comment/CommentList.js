import React from 'react'

export default function CommentList(props) {
  const { comments = [] } = props;
  
  if (!comments.length) {
    return <h4>No comments yet.</h4>
  }

  return (
  <div>
    {/* <p><span className='username'>{postsData.comments.commentAuthor.name}</span> {postsData.comments.commentText}</p> */}
    {/* TODO: add comments later */}
  </div>
  )
}
