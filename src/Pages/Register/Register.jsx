import { use, useState } from "react";
import { Link,  } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = use(AuthContext);

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password, createUser);
    createUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="text-3xl font-bold text-center mt-4">Register</h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 cursor-pointer active:translate-y-0.5 transition duration-300 z-50"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </span>
              </div>
              <div>
                {/* <a className="link link-hover">Forgot password?</a> */}
                {
                  // show error or message
                }
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
