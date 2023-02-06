import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import MainApp from "./components/MainApp/MainApp";

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
        <div className="main">
          <navi>
            <Sidebar>
              <Nav></Nav>
            </Sidebar>
          </navi>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-pet" element={<AddPetForm />} />
            <Route path="/create" element={<Create />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/playdates" element={<PlayDate />} />
            <Route path="/profiles" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </div>
      </Router>
      <MainApp />
    </ApolloProvider>
  );
}

export default App;
