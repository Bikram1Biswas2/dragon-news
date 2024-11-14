import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {

  const {createNewUser,setUser} = useContext(AuthContext)
  const [error,setError] = useState({})

  const handleRegister = (e)=> {
    e.preventDefault()

    const form = new FormData(e.target)
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    if(password.length<6){
      setError({...error,password:"Password must be 6 or more letters"})
    }
    console.log({name,photo,email,password});

    createNewUser(email,password)
    .then((result)=>{
      setUser(result.user)
      console.log(result.user);
    })
    .catch((error)=> {
      console.log(error.message);
    })

  }

    return (
        <div className="card max-w-md shrink-0 flex justify-center items-center bg-white mx-auto p-6 rounded-none">
        <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-2xl font-semibold">Register Your Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
          </div>
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
          </div>
          {
            error.password && ( <label className="label">
              <span className="label-text text-red-600">{error.password}</span>
            </label>)
          }
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <h2>Already have an account?<Link className="text-green-600" to="/auth/login">Login</Link></h2>
      </div>
    );
};

export default Register;