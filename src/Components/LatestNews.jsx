import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 bg-gray-200 p-2">
      <button className="bg-[#D72050] px-3 py-1 rounded-md font-bold text-white">
        Latest
      </button>
      <Marquee pauseOnHover>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          delectus cupiditate tempore ex exercitationem nostrum tempora
          quisquam, et eveniet aspernatur!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
