import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins space-y-4">
          <header>
          <Header></Header>
           <section className="max-w-5xl mx-auto">
            <LatestNews></LatestNews>
           </section>
          </header>
          <nav className="max-w-5xl mx-auto">
            <Navbar></Navbar>
          </nav>
        </div>
    );
};

export default HomeLayout;