import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftSide from "../Components/MainLayOut/LeftSide";
import RightSide from "../Components/MainLayOut/RightSide";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins space-y-4">
            {/* header */}
          <header>
          <Header></Header>
           <section className="max-w-6xl mx-auto">
            <LatestNews></LatestNews>
           </section>
          </header>
          {/* Navbar */}
          <nav className="max-w-6xl mx-auto">
            <Navbar></Navbar>
          </nav>
          {/* Main */}
         <main className="max-w-6xl mx-auto md:grid grid-cols-12 gap-3">
              <aside className="col-span-3"><LeftSide></LeftSide></aside>
              <section className="col-span-6">Main Content</section>
              <aside className="col-span-3"><RightSide></RightSide></aside>
         </main>
        </div>
    );
};

export default HomeLayout;