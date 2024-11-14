import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="card max-w-md mx-auto bg-white shrink-0 flex justify-center items-center p-6 rounded-none">
        <form className="card-body">
            <h2 className="text-2xl font-semibold">Login Your Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
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