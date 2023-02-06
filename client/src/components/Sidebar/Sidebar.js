import Auth from '../../utils/auth';

function Sidebar(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.replace('/login');
  };

  return (
    <aside className="flex-column space-between py-1 min-100-vh">
      <h1 className='app-title'>🐾 MEET & TREATS 🍒</h1>
      {props.children}
      <br></br>
      <button className="btn btn-sm btn-light logout-btn mt-5" onClick={logout}>
        Log out
      </button>
    </aside>
  )
};

export default Sidebar;