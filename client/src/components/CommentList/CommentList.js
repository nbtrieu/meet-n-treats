import React from 'react'

export default function CommentList(props) {
  const { comments = [] } = props;
  
  if (!comments.length) {
    return <h4>No comments yet.</h4>
  }

  return (
  <div className='flex-row my-4'>
    {comments && 
      comments.map((comment) => (
        <div key={comment._id} className="col-12 mb-3 pb-3">
          <p><span className='username'>{comment.commentAuthor.name}</span> {comments.commentText}</p>
          <p className='light-text'>{comment.createdAt}</p>
        </div>
      ))}
  </div>
  )
};
