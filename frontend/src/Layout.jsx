import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => `${isActive ? "active-nav" : ""}`}
            to="login"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `${isActive ? "active-nav" : ""}`}
            to="register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return <footer>this is a footer</footer>;
}

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
