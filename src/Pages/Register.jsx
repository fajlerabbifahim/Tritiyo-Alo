import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=" min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm mx-auto rounded-sm py-6 shadow-none shrink-0 ">
        <h1 className="text-center font-semibold text-3xl text-gray-600 ">
          Register your Account
        </h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              type="password"
              placeholder="Enter Your Password"
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
