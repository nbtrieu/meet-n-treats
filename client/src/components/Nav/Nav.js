import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex-column">
        <li>
          <Link className="text-dark no-underline" to="/">
            <h2 className="my-2">
            🏠 Home
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/add-pet">
            <h2 className="my-2">
            ➕ Add Pet
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/search">
            <h2 className="my-2">
            🔎 Search
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/explore">
            <h2 className="my-2">
            🧭 Explore
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/playdates">
            <h2 className="my-2">
            💞 Play Dates
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/create">
            <h2 className="my-2">
            📝 Create
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/profiles">
            <h2 className="my-2">
            👤 Profiles
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/marketplace">
            <h2 className="my-2">
            🛒 Marketplace
            </h2>
          </Link>
        </li>
        <li>
          <Link className="text-dark no-underline" to="/adoptions">
            <h2 className="my-2">
            🪺 Adoptions
            </h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;