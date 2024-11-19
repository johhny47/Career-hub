import { FaArrowRight } from "react-icons/fa";
import bannerImg1 from "./../../assets/AdobeStock_2537084141.png.webp"

const BannerFirst = () => {
    return (
       <div className="py-10 px-5 bg-blue-950 text-white lg:flex items-center justify-around">
        <div>
            <h1 className="p-2 rounded-lg text-black font-bold bg-slate-50 w-40 text-xs md:w-72 md:text-sm lg:w-80 lg:text-md">Professional career counseling services</h1>
            <h1 className="mt-4 text-5xl font-bold">Gain complete <br /> guidance for your job <br />search</h1>
            <div className="flex items-center mt-5 " ><FaArrowRight className="bg-green-500 rounded-full h-5 w-5 p-1" /><h1>Optimize your resume and cover letter</h1></div>
            <div className="flex items-center my-2" ><FaArrowRight className="bg-green-500 rounded-full h-5 w-5 p-1" /><h1>Prepare for interviews</h1></div>
            <div className="flex items-center" ><FaArrowRight className="bg-green-500 rounded-full h-5 w-5 p-1" /><h1>Develop your career</h1></div>
            <button className="bg-green-500 h-12 w-80 rounded-3xl mt-5">CONNECT WITH A CAREER COACH</button>
          
          </div>
          <div>
            <img src={bannerImg1} alt="" />
          </div>

       </div>
        
    );
};

export default BannerFirst;