import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Sidebar(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <aside className="flex-column space-between py-1">
      <h1>Meet & Treats</h1>
      {props.children}
      <button className="btn btn-lg btn-light m-2" onClick={logout}>
        Log out
      </button>
    </aside>
  )
};

export default Sidebar;