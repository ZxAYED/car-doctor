import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";


const CheckOut = () => {
    const service =useLoaderData()
    const{user }=useContext(AuthContext)
   const {title,_id,price,img} =service
   const handleService=e=>{
    e.preventDefault()
    const form =e.target
    const name =form.name.value
    const date =form.date.value
    const email =form.email.value
    const price =form.price.value
    const order ={
        customerName:name,
        email,
        date,
        service_id:_id,
        price,
        service:title,
        img
    }
    fetch('http://localhost:5001/bookings',{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedID){alert('added succ')}})
   }
    return (
  <div>
    service ={title}
    <div className=" min-h-screen w-full  "> 
  
      <form className=" " onSubmit={handleService}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" defaultValue={user?.DisplayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="date"  name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" defaultValue={user?.email}>Email</span>
          </label>
          <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price"  name="price"  defaultValue={price+ `$` } className="input input-bordered" disabled/>
          
        </div>
      
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>

  </div>
</div>

    );
};

export default CheckOut;