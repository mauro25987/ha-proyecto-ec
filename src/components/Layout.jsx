import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <h1>Lospibes app</h1>
      </nav>

      <Outlet />

      <footer></footer>
    </div>
  );
};

export default Layout;
