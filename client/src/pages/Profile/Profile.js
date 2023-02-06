import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import Login from "../../components/Login";
// import EditPet

import Auth from '../../utils/auth';

function ProfilePage(props) {
  const { posts } = props;
  // console.log('>>> logging posts: ', posts);

  // const userPosts = posts.filter(
  //   post => post.postAuthor === Auth.getUser().data._id
  // );

  

  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; 
  console.log('me: ', me);

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  

  return (
    <div className="page">
      Profiles
    </div>
  );
}

export default ProfilePage;