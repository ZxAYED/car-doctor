import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
const {user,loading}=useContext(AuthContext)
console.log(loading);
if(loading){
    return <div className="flex  justify-center items-center my-20"><progress className="progress w-56"></progress></div> 
}
if(user?.email){
    return children
}
return <Navigate to='/Login' replace></Navigate>
   
};

export default PrivateRoutes;