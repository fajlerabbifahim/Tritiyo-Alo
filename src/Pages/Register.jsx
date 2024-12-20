import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

function Register() {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    if (password.length < 6) {
      return setError("Password Should be at Least 6 Characters");
    }

    registerUser(email, password)
      .then((result) => {
        e.target.reset();
        updateUserProfile({ displayName: name }).then(() => {});
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className=" min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-sm py-6 shadow-none shrink-0 ">
        <h1 className="text-center font-semibold text-3xl text-gray-600 ">
          Register your Account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
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
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
            {
              <label className="text-red-600 font-medium text-sm">
                {error}
              </label>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-sm">Register</button>
          </div>
          <p className="text-center font-medium">
            Already Have An Account ?{" "}
            <Link className="text-red-500" to="/auth/login">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
