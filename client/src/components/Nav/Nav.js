import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex-column">
        <li>
          <Link className="text-dark" to="/">
            <h2 className="my-2">
              Home
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/search">
            <h2 className="my-2">
              Search
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/explore">
            <h2 className="my-2">
              Explore
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/playdates">
            <h2 className="my-2">
              Play Dates
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/create">
            <h2 className="my-2">
              Create
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/profiles">
            <h2 className="my-2">
              Profiles
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/marketplace">
            <h2 className="my-2">
              Marketplace
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark" to="/adoptions">
            <h2 className="my-2">
              Adoptions
            </h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;