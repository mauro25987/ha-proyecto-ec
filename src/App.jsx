import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pelicula from "./components/Pelicula";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./pages/Login";
import Carrito from "./pages/Carrito";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/Pelicula", element: <Pelicula /> },
        { path: "/Carrito", element: <Carrito /> },
        { path: "/Login", element: <Login /> },
        { path: "/About", element: <About /> },
        { path: "/Layout", element: <Layout /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
