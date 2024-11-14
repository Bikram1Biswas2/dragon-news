import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const NewsCategory = () => {
    
    const {data:news} = useLoaderData()
    console.log(news);

    return (
        <div>
            <h2 className="text-2xl font-bold">Dragon News Home</h2>
            <p className="text-gray-400 text-sm mt-2">{news.length} News in this category</p>
            <div>
                {
                    news.map((singleNews) => <NewsCard key={singleNews.id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsCategory;