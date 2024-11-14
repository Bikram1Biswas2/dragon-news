import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="card max-w-md shrink-0 flex justify-center items-center bg-white mx-auto p-6 rounded-none">
        <form className="card-body">
            <h2 className="text-2xl font-semibold">Register Your Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" placeholder="Photo URL" className="input input-bordered" required />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <h2>Already have an account?<Link className="text-green-600" to="/auth/login">Login</Link></h2>
      </div>
    );
};

export default Register;