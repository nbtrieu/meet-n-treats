import { useQuery } from "@apollo/client";
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
      {/* TODO: add post from database */}
    </div>
  );
}

export default Home;
