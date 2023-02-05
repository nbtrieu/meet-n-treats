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
  if (posts.length > 0) {
    console.log(posts[0].timestamp);
    const parsedTimestamp = parseInt(posts[0].timestamp);
    console.log('parsed timestamp: ', parsedTimestamp);
    // console.log(typeof(posts[0].createdAt)); // "Feb 3rd, 2023 at 10:51 am"
    console.log(new Date(parsedTimestamp));
    console.log('altogether :', new Date(parseInt(posts[0].timestamp)));

    // // Sort posts by most recent:
    // posts.sort(function(a, b) {
    //   return new Date(parseInt(b.timestamp)) - new Date(parseInt(a.timestamp));
    // });
    // console.log(posts);
  }

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
      {posts && 
        posts.map((post) => (
          <div key={post._id}>
            <PostCard 
              postsData={post}
            />
            <Link className='' to={`/posts/${postsData._id}`} style={{ textDecoration: 'none' }}>
              <p className='light-text'>View and leave comments</p>
            </Link>
          </div>
      ))}
    </div>
  );
}

export default Home;
