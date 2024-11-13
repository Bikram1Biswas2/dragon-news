import { Link } from "react-router-dom";
import userLogo from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="space-x-3">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userLogo} alt="" />
                </div>
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;