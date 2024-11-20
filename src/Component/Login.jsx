import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from './AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase.config';

const Login = () => {
    const {handleGoogleLogin,handleLogin} = useContext(authContext);
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const [showpassword,setShowpassword] = useState(false)
    const emailRef = useRef()
    
    const handleSubmit =(e)=>
    {
        e.preventDefault();
       
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        handleLogin(email,password)
        .then(res=>{})
        .catch(err=>
        setError(err.message)
       
     
       
      )
       
        if(password.length < 6){
          setError("password must contain at least 6 charcter")
          return;
     }
      if(!/[a-z]/.test(password)){
          setError("password must contain at least one lowercase")
          return;
     }
      if(!/[A-Z]/.test(password)){
          setError("password must contain at least one Uppercase")
           return;
      }
      if(error){
        setError("")
        e.target.reset()
      }
      else{
        navigate("/")
        toast("Successfully login");
       
      
      }
     
    }
    const handleForgetPass=()=>{
      
     const email = emailRef.current.value
     if(!email){
      toast("Please provide a valid email")
     }
     else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        toast("Password reset link sent to your email")
      })
     }
    }
    
   
    useEffect(()=>{
      document.title = "CareerHub | Login"
     },[]) 
    

    
   

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
                <input type="email" name="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={
                  showpassword ? "text" : "password"
                } name="password" placeholder="password" className="input input-bordered" required />
                <button onClick={()=>{setShowpassword( !showpassword )}} className='btn btn-xs absolute right-2 top-12'>{
                  showpassword? <FaEyeSlash />:<IoMdEye />
                  }</button>
                <label onClick={handleForgetPass} className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Login</button>
                <button onClick={handleGoogleLogin} className="btn  mt-2"> <div className='flex'  >Login with <FcGoogle className='ml-1'/>oogle</div></button>

              </div>
              <p>New to this website? please <Link to="/register" ><span className='text-red-500'>Register</span></Link> </p>
              {error && <p className='text-red-500'>{error}</p>}
            </form>
          
          </div>
        </div>
      </div>
    );
  };

export default Login;