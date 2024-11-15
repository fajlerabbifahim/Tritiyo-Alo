import { Link } from "react-router-dom";
import userPNG from "../assets/user.png";

function Navbar() {
  return (
    <div className="flex justify-between my-6 items-center">
      <div></div>
      <div className="space-x-5 lg:ml-[95px]">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-2">
        <img className="w-10" src={userPNG} alt="" />
        <button className="btn btn-neutral rounded-sm ">Login</button>
      </div>
    </div>
  );
}

export default Navbar;
