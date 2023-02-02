import React, { useState } from "react";

function CreatePostPage() {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; 
  console.log('me: ', me);

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to create and post the post
    console.log(`Post created and posted: "${postContent}"`);
    setPostContent("");
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Enter post content"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePostPage;