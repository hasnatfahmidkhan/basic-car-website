import { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { user } = use(AuthContext);

  const links = (
    <>
      <Link className="hover:underline" to="/">
        Home
      </Link>

      <Link className="hover:underline" to="/cars">
        All Cars
      </Link>

      <Link className="hover:underline" to="/wishlist">
        WishList
      </Link>

      {/* Register and login btn  */}

      {!user && (
        <>
          <Link className="hover:underline" to="/login">
            Login
          </Link>

          <Link className="hover:underline" to="/register">
            Register
          </Link>
        </>
      )}
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">{links}</nav>
      <nav>
        <div className="grid grid-flow-col gap-5">
          <a href="https://github.com/hasnatfahmidkhan" target="_blank">
            <FaGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/hasnatfahmid" target="_blank">
            <FaLinkedin size={25} />
          </a>
          <a href="https://www.facebook.com/hasnatfahmidkhan" target="_blank">
            <FaFacebook size={25} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/"}
            className="underline"
          >
            Ghorer Gari
          </Link>{" "}
          Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
