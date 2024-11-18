import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const {handleGoogleLogin,handleLogin} = useContext(authContext);
    
    const handleSubmit =(e)=>
    {
        e.preventDefault();
       
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        handleLogin(email,password)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button onClick={handleGoogleLogin} className="btn  mt-2"> <div className='flex'  >Login with <FcGoogle className='ml-1'/>oogle</div></button>

              </div>
              <p>New to this website? please <Link to="/register" ><span className='text-red-500'>Register</span></Link> </p>
            </form>
           
          </div>
        </div>
      </div>
    );
};

export default Login;