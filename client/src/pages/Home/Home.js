import { useQuery } from "@apollo/client";
import Login from "../../components/Login";

import { QUERY_ME } from "../../utils/queries";
import { QUERY_POSTS } from "../../utils/queries";

import { Link } from "react-router-dom";

import PostCard from "../../components/PostCard/PostCard";

function Home() {
  const { loadingPosts, data: postsData } = useQuery(QUERY_POSTS);
  // NOTE: must be a key-value pair of data: ...
  console.log('postsData: ', postsData);
  // console.log(postsData.posts.)

  // Get posts from query:
  var posts = postsData ? postsData.posts : [];
  console.log('posts: ', posts);

  console.log('posts: ', posts);

  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; // *QUESTION: Why set to empty array instead of empty object? To avoid null or undefined references

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  return (
    <div className="page">
      {posts && 
        posts.map((post) => (
          <div key={post._id} className='app-postcard_page my-5 px-6 py-5'>
            <PostCard 
              postsData={post}
            />
            <Link className='' to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>
              <p className='light-text'>View and leave comments</p>
            </Link>
          </div>
      ) || (
        <div>
          <h2>No posts yet. Add your own post with "📝 Create"!</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
