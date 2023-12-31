import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const NavBar = () => {
  const {logOut,user }=useContext(AuthContext)

  
  const navitems=<>
  <div className="flex gap-4 lg:flex-row flex-col w-fit">
  <NavLink className='btn btn-outline' to='/'>Home</NavLink>
  <NavLink className='btn  btn-outline' to='/about'>About</NavLink>
  <NavLink className='btn  btn-outline' to='/bookings'>Bookings</NavLink>
  </div>
  </>
 const handleLogOut=()=>{
  logOut()
  .then(data =>alert('logout successful',data))
  .catch(err=>console.log(err))
 
}


    return (
        <div className="navbar bg-base-100 mb-5 pt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navitems}
            </ul>
          </div>
          <Link to='/'className="btn btn-ghost normal-case text-xl"><img className="h-16" src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {navitems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email?<button onClick={handleLogOut} className="btn my-2 flex justify-center items-center  mx-auto bg-red-500 text-white">Sign Out</button>:  <NavLink to='/Login'><button className="btn my-2 flex justify-center items-center  mx-auto bg-red-500 text-white">Log IN</button></NavLink>
          }
      
        </div>
      </div>
      
    );
};

export default NavBar;