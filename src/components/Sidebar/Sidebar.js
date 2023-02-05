import Auth from '../../utils/auth';
import './sidebar.css';


function Sidebar(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <aside className="flex-column space-between py-1">
      <h1 className='app-title'>MEET & TREATS</h1>
      {props.children}
      <br></br>
      <button className="btn btn-lg btn-light m-2 logout-btn" onClick={logout}>
        Log out
      </button>
    </aside>
  )
};

export default Sidebar;