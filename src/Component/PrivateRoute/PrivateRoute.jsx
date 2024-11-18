import { Children, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({Children}) => {
    const { user } = useContext(authContext);
    if(!user){
        return <Navigate to="/login" replace={true} />
    }
    return Children;
};

export default PrivateRoute;