import { NavLink, Outlet } from "react-router-dom"
import "./Layout.css"

const Layout = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://stremio.github.io/stremio-addon-guide/img/favicon.png" alt="Logo" />
        </div>
        <div className="navbar-links">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="about">
            <p>About</p>
          </NavLink>
          <NavLink to="login">
            <p>Login</p>
          </NavLink>
          <NavLink to="register">
            <p>Registro</p>
          </NavLink>
        </div>
      </nav>

      <Outlet />

      <footer></footer>
    </div>
  )
}

export default Layout
