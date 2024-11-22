import { useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import "./Layout.css"

const Layout = () => {
  const stateAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const isAuthenticated = (
    <>
      <NavLink to="profile">
        <p>Perfil</p>
      </NavLink>
      <NavLink to="logout">
        <p>Logout</p>
      </NavLink>
    </>
  )
  const isNotAuthenticated = (
    <>
      <NavLink to="login">
        <p>Login</p>
      </NavLink>
      <NavLink to="register">
        <p>Registro</p>
      </NavLink>
    </>
  )

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
          <NavLink to="cart">
            <p>Carrito</p>
          </NavLink>
          {stateAuthenticated ? isAuthenticated : isNotAuthenticated}
        </div>
      </nav>

      <Outlet />

      <footer></footer>
    </div>
  )
}

export default Layout
