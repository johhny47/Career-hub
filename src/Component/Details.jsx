import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const Details = () => {
     const  data = useLoaderData()
   
    const {id,service_name,category,brief_description,pricing,image,counselor} = data
    useEffect(()=>{
      document.title = "CareerHub | Details"
     },[])
    return (  
       
      
      <div className="h-[500px] w-[1062px] flex gap-10 my-20">
         <div className=" w-[35%]">
            <img src={image} className="rounded-xl" alt="" />
         </div>
         <div className=" w-[60%] ">
           <h1 className="text-3xl font-bold ">{service_name}</h1>
           <h2 className="text-xl font-medium my-2">Price: ${pricing}</h2>
           <div className="badge badge-outline border-green-400 bg-green-200 text-green-500 font-medium ">In Stock</div>
           <h2 className="text-xl font-medium mt-2">Description</h2>
           <h2>{brief_description}</h2>
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
      
    
   
      
      
      
    );
};

export default Details;