import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function LoginFrom() {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div className=" min-h-screen  py-8 ">
      <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-sm py-6 shadow-none shrink-0 ">
        <h1 className="text-center font-semibold text-3xl text-gray-600 ">
          Login your Account
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Login</button>
          </div>
          <p className="text-center font-medium">
            Dont’t Have An Account ?{" "}
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginFrom;
