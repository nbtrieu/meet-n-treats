import { useQuery } from "@apollo/client";
import Login from "../../components/Login";

import { QUERY_ME } from "../../utils/queries";
import { QUERY_POSTS } from "../../utils/queries";

import PostCard from "../../components/PostCard/PostCard";

function Home() {
  const { loadingPosts, data: postsData } = useQuery(QUERY_POSTS);
  // NOTE: must be a key-value pair of data: ...
  console.log('postsData: ', postsData);

  const posts = postsData?.posts || [];
  console.log('posts: ', posts);

  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; // *QUESTION: Why set to empty array instead of empty object? To avoid null or undefined references
  // console.log('me: ', me);

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  return (
    <div>
      <h4>Something</h4>
      {posts && 
        posts.map((post) => (
          <div key={post._id}>
            <PostCard 
              postsData={post}
            />
          </div>
      ))}
    </div>
  );
}

export default Home;
