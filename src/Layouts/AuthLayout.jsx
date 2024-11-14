import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
       <div className="bg-gray-300">
         <div className="max-w-6xl mx-auto p-10 space-y-5">
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
       </div>
    );
};

export default AuthLayout;