import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import React, { useState } from 'react';




const Details = () => {
     const  data = useLoaderData()
     


     const [text, setText] = useState('');
    
     const [showText, setShowText] = useState('');
   
     const handleInputChange = (event) => {
       setText(event.target.value);
      
     };
   const handleButtonClick = () => {
    setShowText(text);
       setText('');
     };
   

   
    const {id,service_name,category,brief_description,pricing,image,counselor} = data
    useEffect(()=>{
      document.title = "CareerHub | Details"
     },[])
    return (  
       
      
     <div className="  w-[1062px] mx-auto">
       <div className=" mx-auto md:flex lg:flex gap-10 my-10 lg:mb-0">
         <div className=" w-[30%] md:w-[45%] lg:w-[45%] ">
            <img src={image} className="rounded-xl" alt="" />
         </div>
         <div className=" w-[45%]">
           <h1 className="text-3xl font-bold ">{service_name}</h1>
           <h2 className="text-xl font-medium my-2">Price: {pricing}</h2>
          
           <h2 className="text-xl font-medium mt-2">Description</h2>
           <h2 className="w-48">{brief_description}</h2>
           <h2 className="text-xl font-medium mt-3">Counselor</h2>
           <h2>{counselor}</h2>
           
           <h2 className="text-xl font-medium mt-3">Rating</h2>
          <div className="rating mt-2">
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
        
        </div>
      
       
         </div>
         
        
      </div>
      <div className="mb-6">
            <h1 className="font-bold">Feedback</h1>
            <textarea className="textarea textarea-bordered" cols={35} rows={5} placeholder="Share your feedback"  value={text} 
        onChange={handleInputChange} 
       ></textarea>
           <div>
           <button  onClick={handleButtonClick} className="btn btn-primary inline-block">Submit</button>
           </div>
         </div>
         <h1>Show Feedback: {showText}</h1>
        
     </div>
    
   
      
      
      
    );
};

export default Details;