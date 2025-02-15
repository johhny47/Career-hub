import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "./AuthProvider/AuthProvider";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";



const Register = () => {
    const {handleRegister,mannageProfile}=useContext(authContext)
    const [error,setError]=useState("")
    const [showpass,setShowpass] = useState(false)
    const handleSubmit =(e)=>
    {
        e.preventDefault();
       
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL =  e.target.photourl.value
        handleRegister(email,password)
        .then(res=>{
            mannageProfile(name,photoURL)
        })
        console.log(name,email,password)
        if(password.length < 6){
            setError("password must contain at least 6 charcter")
            return;
       }
        if(!/[a-z]/.test(password)){
            setError("password must contain at least one lowercase")
            return;
       }
        if(!/[A-Z]/.test(password)){
            setError("password must contain at least one upperrcase")
             return;
        }
      }
    useEffect(()=>{
      document.title = "CareerHub | Register"
     },[])
     
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name="photourl" placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={
                  showpass ? "text" : "password"
                } name="password" placeholder="password" className="input input-bordered" required />
                <button onClick={()=>{setShowpass( !showpass )}} className='btn btn-xs absolute right-10 bottom-40'>{
                  showpass? <FaEyeSlash />:<IoMdEye />
                  }</button>
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have account? please <Link to="/login"><span className="text-blue-700">Login</span></Link> </p>
            </form>
           
            {error && <p className="text-red-500">{error}</p>}
          </div>
         
        </div>
      </div>
    );
};

export default Register;