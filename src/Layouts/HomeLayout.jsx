import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNav from "../Components/LayoutComponet/LeftNav";
import RightNav from "../Components/LayoutComponet/RightNav";
import Navbar from "../Components/Navbar";

function HomeLayout() {
  return (
    <div className="font-Poppins">
      <header>
        <Header />
        <section className="max-w-[1100px] mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-8 gap-6 grid md:grid-cols-12 ">
        <aside className="col-span-3">
          <LeftNav />
        </aside>
        <section className="col-span-6">
          <h1 className="font-semibold text-[20px]"> Tritiyo Alo Home</h1>
          <div className="mt-5">
            <Outlet />
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
}

export default HomeLayout;
