import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function LeftNav() {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  return (
    <div className="sticky top-5">
      <h1 className="font-semibold text-[20px]">
        All Category ({categories.length})
      </h1>
      <div className="flex flex-col gap-3 mt-5 px-8">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              ` btn ${isActive ? "bg-gray-300" : ""}`
            }
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default LeftNav;
