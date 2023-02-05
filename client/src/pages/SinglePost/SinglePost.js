import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import CommentList from "../../components/Comment/CommentList";
// TODO: import CommentForm here when it's made

import Login from "../../components/Login";

import { QUERY_ME } from "../../utils/queries";
import { QUERY_SINGLE_POST } from "../../utils/queries";

import PostCard from "../../components/PostCard/PostCard";

export default function SinglePost() {
  console.log('Starting SinglePost()...')
  // Retrieve postId from the route:
  const { postId } = useParams();
  
  // Fetch single post data:
  const { loadingPost, data: postData } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });
  // NOTE: must be a key-value pair of data: ...
  console.log('>>>logging postData: ', postData);

  const post = postData ? postData.post : [];
  // const post = postData.post;
  console.log('>>>logging post: ', post);
  // BUG: WHY IS LOGGING THE FOLLOWING AT THE SAME TIME BREAKING THIS PAGE???
  // BUT LOGGING ONE BY ONE AND ADDING JSX ONE BY ONE WORKS???? 
  // BUT THEN IT BREAKS AGAIN WHEN REFRESH??
  // console.log('logging postAuthor: ', post.postAuthor);
  // console.log('logging postAuthor.name: ', post.postAuthor.name);

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
    <div>
      SINGLE POST
      {/* <h4>{post.postAuthor.name}</h4> */}
      {/* <p>{post.createdAt}</p> */}
      {/* <img id="uploadedimage" src={post.postImageURL} width={500}></img> */}
      {/* <p><span className='username'>{post.postAuthor.name}</span> {post.postText}</p> */}

      {/* <h4>{post.postAuthor.name}</h4>
      <p>{post.createdAt}</p>
      <img id="uploadedimage" src={post.postImageURL} width={500}></img>
      <p><span className='username'>{post.postAuthor.name}</span> {post.postText}</p> */}
      
      {post.length > 0 ? (
        <div>
          <PostCard 
            postsData={post}
          />
        </div>
      ) : (
        <div>Loading post...</div>
      )}
      {/* <PostCard 
        postsData={post}
      /> */}
      {/* ERROR: Why is 'name' undefined??? it shows up on console when logging post though??? */}
      
      {/* TODO: Add CommentList & CommentForm */}
    </div>
  )
}
