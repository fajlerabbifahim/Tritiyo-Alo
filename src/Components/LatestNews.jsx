import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function LatestNews() {
  return (
    <div className="flex bg-base-200 py-2 px-2">
      <p className="bg-[#D72050] text-white py-2 px-3 rounded-sm ">Latest</p>
      <Marquee>
        <Link className="mx-4" to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        </Link>
        <Link className="mx-4" to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        </Link>
        <Link className="mx-4" to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        </Link>
      </Marquee>
    </div>
  );
}

export default LatestNews;
