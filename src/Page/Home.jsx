import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Component/Banner/Banner';
import Services from '../Component/Services';

const Home = () => {
    const data= useLoaderData();
    useEffect(()=>{
      document.title = "CareerHub | Home"
     },[])
  
    return (
        <div className='max-w-6xl mx-auto'>
           <Banner></Banner>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto '>
          {
            data.map((data,index)=><Services keys={index} data={data}></Services>)
           }
          </div>
        </div>
    );
};

export default Home;