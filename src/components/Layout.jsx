import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
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
      <Nav.Link as={NavLink} to={`profile/${userId}`}>
        Perfil
      </Nav.Link>
      <Nav.Link
        as="button"
        onClick={() => {
          dispatch(removeToken())
          navigate("/")
        }}
      >
        Logout
      </Nav.Link>
    </>
  )

  const isUserNotAuthenticated = (
    <>
      <Nav.Link as={NavLink} to="login">
        <p>Login</p>
      </Nav.Link>
      <Nav.Link as={NavLink} to="register">
        <p>Registro</p>
      </Nav.Link>
    </>
  )

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md" className="border-body">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://stremio.github.io/stremio-addon-guide/img/favicon.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />

            <img
              src="https://www.stremio.com/website/stremio-txt-logo-small.png"
              alt="Logo"
              width="200"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="about">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="cart">
                <FaShoppingCart />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </Nav.Link>

              <NavDropdown title="Opciones" id="navbarDropdown">
                <li>
                  {isAuthenticated ? (
                    <Nav.Link>{isUserAuthenticated}</Nav.Link>
                  ) : (
                    <Nav.Link>{isUserNotAuthenticated}</Nav.Link>
                  )}
                </li>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <footer></footer>
    </div>
  )
}

export default Layout
