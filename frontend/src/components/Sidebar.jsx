import { NavLink } from 'react-router-dom'

const sidebarItems = ['Dashboard', 'Posts', 'Analytics', 'Settings']

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">FS</div>

      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        {sidebarItems.map((item) => (
          <NavLink key={item} to={item === 'Dashboard' ? '/' : '/about'}>
            {item}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
