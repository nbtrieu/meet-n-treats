import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import Home from "./pages/Home";
import Create from "./pages/Create";
import PlayDate from "./pages/PlayDate";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SinglePost from "./pages/SinglePost/SinglePost";

import Login from "./components/Login";
import Register from "./components/Register";
import Explore from "./pages/Explore";
import Sidebar from "./components/Sidebar/Sidebar";
import Nav from "./components/Nav/Nav";
import PostCard from "./components/PostCard/PostCard";
import "./app.css";



const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ProSidebarProvider>
      <Router>
        <div>
          <div className="container">

              <Sidebar>
                <div className="app-title-side">
                    <div className="app-nav">
                    <Nav/>
                    </div>
                    <div className="app-line">
                    </div>
                    <div className="app-postcard">
                    <PostCard />
                    </div>
                    
                </div>
            </Sidebar>
          </div>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/playdates" element={<PlayDate />} />
            <Route path="/profiles" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </div>
      </Router>
      </ProSidebarProvider>
    </ApolloProvider>
  );
}

export default App;
