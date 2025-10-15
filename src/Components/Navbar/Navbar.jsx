import { Menu } from "lucide-react";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(()=>{

      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cars">All Cars</NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">WishList</NavLink>
      </li>
      {/* Register and login btn  */}

      {user ? (
        <li>
          <button
            onClick={handleSignOut}
            className="xl:btn btn-info text-xl xl:text-base"
          >
            SignOut
          </button>
        </li>
      ) : (
        <>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="xl:btn btn-info text-xl xl:text-base"
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/register")}
              className="xl:btn btn-success text-xl xl:text-base"
            >
              Register
            </button>
          </li>
        </>
      )}
    </>
  );
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
            <ul className="flex gap-8 text-xl items-center">{links}</ul>
          </div>
          {/* mobile menu  */}
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content items-start bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
