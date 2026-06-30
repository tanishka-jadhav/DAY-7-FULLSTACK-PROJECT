import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

function Layout({ children }) {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <div className="dashboard-main">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
