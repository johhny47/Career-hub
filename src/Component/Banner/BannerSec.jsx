
import bannerImg2 from "../../assets/jobimage.png.webp"
const BannerSec = () => {
    return (
        <div  className="py-20  text-black lg:flex items-center justify-around">
          <div>
          <img src={bannerImg2} alt="" />
          </div>
          <div>
           <h1 className="text-4xl font-light">
           Gain complete guidance <br />
          <span className="font-bold"> for your job search</span>
           </h1>
           <p className="pt-3">Our end-to-end career coaching program, Sprout,<br /> ensures individuals gain complete guidance for <br /> their job search. Our career coaches analyze,<br /> improve, and optimize everything from your <br /> resumes, cover letters, online presence, interview <br />skills, and more.</p>
           <p className="mt-2">We help you build, thrive and grow while earning <br /> the salary you deserve and propelling your career <br /> to greater heights.</p>
          </div>
            
        </div>
    );
};

export default BannerSec;