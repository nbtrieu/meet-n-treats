import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";

import Home from "../../pages/Home";
import AddPetForm from "../../pages/AddPetForm/AddPetForm";
import Create from "../../pages/Create";
import PlayDate from "../../pages/PlayDate";
import Profile from "../../pages/Profile";
import Search from "../../pages/Search";
import Explore from "../../pages/Explore";
import SinglePost from "../../pages/SinglePost/SinglePost";

import Login from "../Login";
import Register from "../Register";
import Sidebar from "../Sidebar";
import Nav from "../Nav";

export default function MainApp() {
  const { loadingPosts, data: postsData } = useQuery(QUERY_POSTS);
  // const { loadingComments, data: commentsData } = useQuery()
  console.log('>>> logging postsData: ', postsData);

  // Get posts from query:
  var posts = postsData ? postsData.posts : [];
  console.log('posts: ', posts);
  
  return (
    <Router>
      <div>
        <Sidebar>
          <Nav></Nav>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home posts={posts}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-pet" element={<AddPetForm />} />
          <Route path="/create" element={<Create />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/playdates" element={<PlayDate />} />
          <Route path="/profiles" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/posts/:postId" element={<SinglePost posts={posts} />} />
        </Routes>
      </div>
    </Router>
  )
}
