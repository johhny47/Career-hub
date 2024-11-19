import React from 'react';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "./AuthProvider/AuthProvider";

const MyProfile = () => {
    const {user,setUser,mannageProfile,}=useContext(authContext)
    // const [myProfile, setMyProfile] = useState({});
    const handleSubmit =(e)=>{
      e.preventDefault();
        const name = e.target.name.value
        const photoURL = e.target.photourl.value
        console.log(name,photoURL)
        mannageProfile(name,photoURL)
        
       
          
      
    }
  
    return (
       <div>
        <h1 className='bg-gray-400 text-white px-2'>Update Profile</h1>
        <div>
           <form onSubmit={handleSubmit}  action="">
           <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name="photourl" placeholder="photo url" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            
            </form> 
        </div>
       </div>
    );
};

export default MyProfile;