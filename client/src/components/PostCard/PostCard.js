import { Link } from 'react-router-dom';

export default function PostCard(props) {
  const { postsData } = props;
  return (
    // FRONT-END TODO: Add styling to the div below to look like an Instagram post
    <div>
      <h4>{postsData.postAuthor.name}</h4>
      <p>{postsData.createdAt}</p>
      {/* Render uploaded image from Cloudinary: */}
      <img id="uploadedimage" src={postsData.postImageURL} width={500}></img>
      {/* Render author's name: */}
      <p><span className='username'>{postsData.postAuthor.name}</span> {postsData.postText}</p>
      <Link className='' to='/single-post' style={{ textDecoration: 'none' }}>
        <p className='light-text'>View and leave comments</p>
      </Link>
    </div>
  )
}
