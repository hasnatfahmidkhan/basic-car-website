import { Menu } from "lucide-react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={"py-2 bg-base-100 shadow-sm sticky top-0 z-50 text-black"}>
      <div className="navbar w-11/12 max-w-7xl mx-auto 2xl:px-4">
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-extrabold playfair-font">
            GHORER GARI
          </Link>
        </div>

        <div className="navbar-end">
          {/* desktop menu  */}
          <div className="hidden lg:flex">
            <ul className="flex gap-8 text-xl ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cars">All Cars</NavLink>
              </li>
              <li>
                <NavLink to="/wishlist">WishList</NavLink>
              </li>
            </ul>
          </div>
          {/* mobile menu  */}
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cars">All Cars</NavLink>
              </li>
              <li>
                <NavLink to="/wishlist">WishList</NavLink>
              </li>
            </ul>
          </div>

          {/* Register and login btn  */}
          <div className="flex items-center gap-4 ml-8">
            <button
              onClick={() => navigate("/login")}
              className="btn btn-info text-base"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-success text-base"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
