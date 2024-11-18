import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData()
    const {id,service_name,category,brief_description,pricing,image,counselor} = data
    console.log(service_name)
    return (
        <div>
            <h1>details{service_name}</h1>
        </div>
    );
};

export default Details;