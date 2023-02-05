import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import CommentList from "../../components/Comment/CommentList";
// TODO: import CommentForm here when it's made

import Login from "../../components/Login";

import { QUERY_ME } from "../../utils/queries";
import { QUERY_SINGLE_POST } from "../../utils/queries";

import PostCard from "../../components/PostCard/PostCard";

export default function SinglePost() {
  // Retrieve postId from the route:
  const { postId } = useParams();
  
  // Fetch single post data:
  const { loadingPost, data: postData } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });
  // NOTE: must be a key-value pair of data: ...
  console.log('postData: ', postData);

  const post = postData ? postData.post : [];
  console.log('single post: ', post);

  // Redirect to log in page if not logged in:
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; 

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  if (loadingPost) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      SINGLE POST
      {/* <PostCard postsData={post} /> */}
      {/* ERROR: Why is 'name' undefined??? it shows up on console when logging post though??? */}
      {/* TODO: Add CommentList & CommentForm */}
    </div>
  )
}
