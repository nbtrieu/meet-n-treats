import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "./utils/queries";
// import Login from "./components/Login";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";
import PlayDate from "./pages/PlayDate";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar/Sidebar";
import Nav from "./components/Nav/Nav";

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
      <Router>
        <div>
        <Sidebar>
        <Nav></Nav>
      </Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/playdates" element={<PlayDate />} />
            <Route path="/profiles" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
