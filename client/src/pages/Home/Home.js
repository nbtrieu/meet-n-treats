import { useQuery } from "@apollo/client";

import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Nav/Nav";
import Login from "../../components/Login";

import { QUERY_ME } from "../../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || []; // *QUESTION: Why set to empty array instead of empty object? To avoid null or undefined references
  console.log('me: ', me);

  if (me.length === 0) {
    return (
      <Login />
    )
  }

  return (
    <div>
      <Sidebar>
        <Nav></Nav>
      </Sidebar>
    </div>
  );
}

export default Home;
