import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function AuthLayout() {
  return (
    <div className=" bg-[#f3f3f3]">
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
