import { Nav, Navbar } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet, useNavigate } from "react-router-dom"

import { removeToken } from "../reducer/authSlice"
import "./Layout.css"

const Layout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, userId } = useSelector(state => state.auth)
  const cartCount = useSelector(state => state.cart.length)

  const isUserAuthenticated = (
    <>
      <NavLink to={`profile/${userId}`}>
        <p>Perfil</p>
      </NavLink>
      <button
        type="button"
        onClick={() => {
          dispatch(removeToken())
          navigate("/")
        }}
      >
        <p>Logout</p>
      </button>
    </>
  )

  const isUserNotAuthenticated = (
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
      <nav className="navbar  border-body navbar-expand-md" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://stremio.github.io/stremio-addon-guide/img/favicon.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </a>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link as={NavLink} to="about">
                  About
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link as={NavLink} to="cart">
                  <FaShoppingCart />
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Nav.Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="NavbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Opciones
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {isAuthenticated ? (
                      <Nav.Link>{isUserAuthenticated}</Nav.Link>
                    ) : (
                      <Nav.Link>{isUserNotAuthenticated}</Nav.Link>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer></footer>
    </div>
  )
}

export default Layout
