import { Link } from "react-router-dom";
import userPNG from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className=" font-Poppins flex justify-between py-6 items-center">
      <div>{user?.email}</div>
      <div className="space-x-5 lg:ml-[95px]">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-2">
        <img className="w-10" src={userPNG} alt="" />

        {user ? (
          <Link onClick={logOut} className="btn btn-neutral rounded-sm">
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-sm ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
