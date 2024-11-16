import { LuShare2 } from "react-icons/lu";
import { Link } from "react-router-dom";

function NewsCard({ singleNews }) {
  const { author, title, rating, image_url, details, total_view, _id } =
    singleNews;

  return (
    <div>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center p-4">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-gray-900 font-semibold">{author.name}</h3>
            <p className="text-gray-500 text-sm">{author.published_date}</p>
          </div>
          <div className="ml-auto">
            <button className="text-gray-500 hover:text-gray-700">
              <LuShare2 />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <div className="my-3">
            <img
              src={image_url}
              alt="News"
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <p className="text-gray-600 text-sm">
            {details.slice(0, 150)}
            <Link
              to={`/news/${_id}`}
              className="text-red-500 font-semibold cursor-pointer"
            >
              {" "}
              Read More
            </Link>
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between p-4 border-t">
          {/* Rating Stars */}
          <div className="flex items-center">
            <span className="text-yellow-400 text-xl">★ ★ ★ ★ ★</span>
            <span className="ml-2 text-gray-600 font-semibold">
              {rating.number}
            </span>
          </div>

          {/* View Count */}
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5 mr-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
