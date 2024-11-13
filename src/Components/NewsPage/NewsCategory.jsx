import { useLoaderData } from "react-router-dom";


const NewsCategory = () => {
    
    const {data} = useLoaderData()
    console.log(data);

    return (
        <div>
            <h2>{data.length} News in this category</h2>
        </div>
    );
};

export default NewsCategory;