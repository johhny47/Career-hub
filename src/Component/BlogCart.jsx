

const BlogCart = ({data}) => {
    console.log(data)
    const {id,date,heading,paragraph,image}=data
    return (
        <div className="  h-[280px] w-[300px] md:flex md:h-[280px] md:w-10/12 lg:flex lg:h-[280px] lg:w-10/12 mx-auto">
            <div className="h-[45%] w-[100%]  md:w-[40%] md:h-[80%] lg:w-[45%] lg:h-8/12 border-2">
             <img src={image} className="items-center w-full h-full " alt="" srcset="" />
            </div>
            <div className="h-[45%] w-[100%] md:w-[45%] md:h-[80%] lg:w-[45%] lg:h-[80%] border-2 mt-2 md:mx-5 md:mt-0 items-center">
            <h1 className="text-xs lg:text-x md:mt-5  lg:mt-2">{date}</h1>
            <h1 className=" text-xs font-bold lg:text-2xl lg:mt-2 ">{heading}</h1>
            <p className="text-xs text-gray-400 mt-1 ">{paragraph}</p>
            </div>
        </div>
    );
};

export default BlogCart;