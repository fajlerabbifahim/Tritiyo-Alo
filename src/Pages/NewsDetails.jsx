import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNav from "../Components/LayoutComponet/RightNav";

function NewsDetails() {
  const data = useLoaderData();

  const { image_url, details, title, category_id } = data.data[0];

  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5 ">
        <section className="col-span-9">
          <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image_url} className="rounded-xl" />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title ">{title}</h2>
              <p>{details}</p>
              <div className="card-actions mt-5">
                <Link
                  to={`/category/${category_id}`}
                  className="btn btn-outline"
                >
                  All News in this Category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
}

export default NewsDetails;
