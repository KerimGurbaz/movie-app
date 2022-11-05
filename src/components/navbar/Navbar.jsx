import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./navbar.styles.scss";
const Navbar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <NavLink className="nav-logo" to="/">
          MovieApp
        </NavLink>
        <div className="nav-links">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="register">
            Register
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
