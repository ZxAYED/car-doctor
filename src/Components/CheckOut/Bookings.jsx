import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Authentication/AuthProvider";
import Booking from "./Booking";
import axios from "axios";

const Bookings = () => {
  const {user}=useContext(AuthContext)
  const url=`http://localhost:5001/bookings?email=${user?.email}`
  const [data,setData]=useState([])
  useEffect(()=>{
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data)
// setData(data)
    
//     })
axios.get(url,{withCredentials:true})
.then(res=>{setData(res.data)})
  },[url])

  const handleDelete=(id)=>{
    const proceed =confirm('are u sure?')
    if(proceed){
      fetch(`http://localhost:5001/bookings/${id}`,
      {
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{alert('deleted')
       console.log(data)})
      
    }
  }
  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto ">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Service</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
      {
        data.map(booking=><Booking key={booking._id}
          booking={booking}
          handleDelete={handleDelete}
        ></Booking>)
      }
           </table>
    </div>
    </div>
  );
};

export default Bookings;
