import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

function CategoryNews() {
  const { data: news } = useLoaderData();
  console.log(news);

  return (
    <div>
      {news.map((singleNews, idx) => (
        <NewsCard key={idx} singleNews={singleNews} />
      ))}
    </div>
  );
}

export default CategoryNews;
