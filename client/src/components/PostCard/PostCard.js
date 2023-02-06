import { Link } from 'react-router-dom';

export default function PostCard(props) {
  const { postsData } = props;
  return (
    // FRONT-END TODO: Add styling to the div below to look like an Instagram post
    <div>
      <div className='app-postcard_data-author'>
        <div className='app-postcard_data-author-avatar'>
          <img src={'https://res.cloudinary.com/dnwrm14k9/image/upload/v1675571532/avatar_if5map.png'} alt='avatar' />
        </div>
        <h4>{postsData.postAuthor.name}</h4>
      </div>
      <p>{postsData.createdAt}</p>
      {/* Render uploaded image from Cloudinary: */}
      <div className='app-postcard_data-image'>
        <img id="uploadedimage" src={postsData.postImageURL} width={500}></img>
      </div>
      {/* Render author's name: */}
      <p><span className='username'>{postsData.postAuthor.name}</span> {postsData.postText}</p>
    </div>
  )
}
