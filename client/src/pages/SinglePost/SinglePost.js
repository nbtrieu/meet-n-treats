import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm/CommentForm";

import Login from "../../components/Login";

import { QUERY_ME } from "../../utils/queries";

import PostCard from "../../components/PostCard/PostCard";

export default function SinglePost(props) {
  console.log('Starting SinglePost()...');

  // Retrieve postId from the route:
  const { postId } = useParams();
  
  const { posts } = props;
  console.log('>>> logging posts: ', posts);

  const post = posts.find(post => post._id === postId);
  console.log('>>> logging post: ', post);

  // Redirect to log in page if not logged in:
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; 

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  // if (loadingPost) {
  //   return <div>Loading...</div>;
  // }
  
  return (
    <div className="flex-column align-center mx-auto py-5">
      <div className='app-postcard_page_single flex-row mt-5 mb-6 px-3 pt-5'>
        <PostCard postsData={post} />
        <div className="mx-5 flex-column mt-6 mb-5">
          <h2>💭 Join the Discussion 💭</h2>
          <CommentList comments={post.comments} />
          <br></br>
          <CommentForm postId={postId} />
        </div>
        <div className="visibility-hidden">
          <CommentForm postId={postId} />
        </div>
      </div>
    </div>
  )
}
