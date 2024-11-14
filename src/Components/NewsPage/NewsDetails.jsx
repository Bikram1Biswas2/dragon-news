import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header";
import RightSide from "../MainLayOut/RightSide";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);

  return (
    <div className="max-w-6xl mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="text-2xl font-bold">Dragon News</h2>
          <div className="card ">
            <figure className="px-10 pt-10">
              <img
                src={news.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body space-y-4">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
              <div className="justify-start">
                <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white"><FaArrowLeftLong />All News is this Category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
