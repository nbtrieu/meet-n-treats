import Sidebar from "../../components/Sidebar";
// import Nav from "../../components/Nav";
import { useState } from "react";
import LandingPage from "../../components/LandingPage/LandingPage";

function Home() {
  const [pages] = useState([
    { name: 'Home' },
    { name: 'Search' },
    { name: 'Explore' },
    { name: 'Play Dates' },
    { name: 'Create' },
    { name: 'Profiles' },
    { name: 'Marketplace' },
    { name: 'Adoptions' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      {/* <Sidebar>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
      </Sidebar> */}

      <LandingPage />

    </div>

  );
}

export default Home;
