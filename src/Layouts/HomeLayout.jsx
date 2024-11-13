import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <Header></Header>
           <section className="max-w-5xl mx-auto">
            <LatestNews></LatestNews>
           </section>
        </div>
    );
};

export default HomeLayout;