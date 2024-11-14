import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {createLogIn,setUser} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [error,setError] = useState({})

  const handleLogIn = (e)=> {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log({email,password});

    createLogIn(email,password)
    .then((result)=>{
       setUser(result.user)
       navigate(location?.state? location.state: "/")
    })
    .catch((err)=>{
     setError({...error, login:err.code});
    })

  }

    return (
        <div className="card max-w-md mx-auto bg-white shrink-0 flex justify-center items-center p-6 rounded-none">
        <form onSubmit={handleLogIn} className="card-body">
            <h2 className="text-2xl font-semibold">Login Your Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            {
              error.login && ( <label className="label text-red-600">
                <a href="#" className="">{error.login}</a>
              </label>)
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <h2>New to this website?<Link className="text-red-600" to="/auth/register">Register</Link> first</h2>
      </div>
    );
};

export default Login;