import { useQuery } from "@apollo/client";
import Login from "../../components/Login";

import { QUERY_ME } from "../../utils/queries";
import { QUERY_POSTS } from "../../utils/queries";

import PostCard from "../../components/PostCard/PostCard";

export default function SinglePost() {
  // Fetch posts data:
  const { loadingPosts, data: postsData } = useQuery(QUERY_POSTS);
  // NOTE: must be a key-value pair of data: ...
  console.log('postsData: ', postsData);

  const posts = postsData?.posts || [];
  console.log('posts: ', posts);

  // Redirect to log in page if not logged in:
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; 

  if (me.length === 0) {
    return (
      <Login />
    )
  }
  
  return (
    <div>
      {posts && 
        posts.map((post) => (
          <div key={post._id}>
            <PostCard 
              postsData={post}
            />
            
          </div>
      ))}
    </div>
  )
}
