import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Component/Banner/Banner';
import Services from '../Component/Services';

const Home = () => {
    const data= useLoaderData();
  
    return (
        <div className='max-w-6xl mx-auto'>
           <Banner></Banner>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-20'>
          {
            data.map((data,index)=><Services keys={data.id} data={data}></Services>)
           }
          </div>
        </div>
    );
};

export default Home;