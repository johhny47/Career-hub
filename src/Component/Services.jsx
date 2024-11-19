import { NavLink } from "react-router-dom";


const Services = ({data}) => {
  
   const {id,service_name,category,brief_description,pricing,image,counselor} = data

 
   
    return (
        <div className="card bg-base-100 w-72 md:w-80 lg:w-80 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {service_name}
      <div className="badge badge-secondary">{pricing}</div>
    </h2>
    <p>{brief_description}</p>
    <p>{category}</p>
    <p>{counselor}</p>

    <div className="card-actions justify-end">
      <NavLink to={`/details/${id}`}><button className="btn bg-green-500">Learn More</button></NavLink>
    </div>
  </div>
</div>
    );
};

export default Services;