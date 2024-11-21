import { useLoaderData } from "react-router-dom";
import BlogCart from "./BlogCart";


const Blog = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="mt-7">
          <div className="grid gap-5">
          {
            data.map(data => <BlogCart data={data}></BlogCart>)
          }
          </div>
        </div>
    );
};

export default Blog;