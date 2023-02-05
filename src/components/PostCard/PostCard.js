import { Link } from 'react-router-dom';
import image from '../../assets/human.jpg';
import './postcard.css';
import {AiOutlineHeart, AiOutlineComment, AiOutlineSend} from 'react-icons/ai';
import {BsBookmark} from 'react-icons/bs';

export default function PostCard(props) {
  // const { postsData } = props;
  return (

    <div className='app-postcard_page'>
      <div className='app-postcard_data-author'>
        <div className='app-postcard_data-author-avatar'>
          <img src={image} alt='avatar' />
          </div>
          <div className='app-postcard_data-author-name'>
            <h4>Username</h4>
            <p>1 hour</p>
            </div>
      </div>

      <div className='app-postcard_data-image'>
        <img src={image} alt='avatar' />
      </div>

      <div className='app-postcard-icons'>
        <div className='app-postcard_icons-heart'>
          <AiOutlineHeart className='app-postcard_data-icon'/>
          <AiOutlineComment className='app-postcard_data-icon'/>
          <AiOutlineSend className='app-postcard_data-icon'/>

        </div>
        <div className='app-postcard_icons-bookmark'>
          <BsBookmark className='app-postcard_data-icon'/>
          </div>

      </div>

      <div className='app-postcard_data-likes'>
        <p>100 likes</p>
        <p><span className='username'>John Doe</span> Looking great</p>
        <Link className='' to={`/posts/`} style={{ textDecoration: 'none' }}>
         <p className='light-text'>View and leave comments</p>
       </Link>
      </div>


     
      </div>
    // FRONT-END TODO: Add styling to the div below to look like an Instagram post
    // <div>
    //   <h4>{postsData.postAuthor.name}</h4>
    //   <p>{postsData.createdAt}</p>
    //   {/* Render uploaded image from Cloudinary: */}
    //   <img id="uploadedimage" src={postsData.postImageURL} width={500}></img>
    //   {/* Render author's name: */}
    //   <p><span className='username'>{postsData.postAuthor.name}</span> {postsData.postText}</p>
    //   {/* <Link className='' to={`/posts/${postsData._id}`} style={{ textDecoration: 'none' }}>
    //     <p className='light-text'>View and leave comments</p>
    //   </Link> */}
    // </div>
  )
}
