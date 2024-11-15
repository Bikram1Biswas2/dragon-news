import { Link } from "react-router-dom";
import userLogo from "../assets/user.png"
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center">
            <div>{user && user.email}</div>
            <div className="space-x-6">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                {
                    user && user?.email? 
                    <div className="flex items-center gap-2">
                         <p>{user.displayName}</p>
                       <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                      
                    </div> 
                    :  
                    <div>
                      <img src={userLogo} alt="" />
                    </div>
                }
               
                {
                    user && user?.email ? <button onClick={logOut}  className="btn btn-neutral rounded-none">LogOut</button> :  <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
                }
               
            </div>
        </div>
    );
};

export default Navbar;