import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './../Component/Banner';
import Services from '../Component/Services';

const Home = () => {
    const data= useLoaderData();
    console.log(data)
    return (
        <div>
           <Banner></Banner>
          <div className='grid grid-cols-3 mx-auto'>
          {
            data.map((data,index)=><Services keys={data.id} data={data}></Services>)
           }
          </div>
        </div>
    );
};

export default Home;