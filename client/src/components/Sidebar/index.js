function Sidebar(props) {
  return (
    <aside className="flex-column space-between py-1">
      <h1>Meet & Treats</h1>
      {props.children}
    </aside>
  )
};

export default Sidebar;
