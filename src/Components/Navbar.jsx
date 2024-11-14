import { Link } from "react-router-dom";
import userLogo from "../assets/user.png"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center">
            <div>{user.name}</div>
            <div className="space-x-6">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userLogo} alt="" />
                </div>
                <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;