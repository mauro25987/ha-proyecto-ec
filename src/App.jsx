import "bootstrap/dist/js/bootstrap.bundle.min"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/index"
import {
  About,
  Cart,
  Error,
  Home,
  Login,
  Logout,
  Movie,
  Order,
  Profile,
  Register,
} from "./pages/index"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/movie/:id", element: <Movie /> },
        { path: "/cart", element: <Cart /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/profile/:id", element: <Profile /> },
        { path: "/about", element: <About /> },
        { path: "/logout", element: <Logout /> },
        { path: "/order", element: <Order /> },
        { path: "*", element: <Error /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />
}

export default App
