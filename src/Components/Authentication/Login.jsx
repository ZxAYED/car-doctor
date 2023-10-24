import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
const Login = () => {
    const {LogIn}=useContext(AuthContext)
    const [error ,setError]=useState(false)
    const handleLogin =(e)=>{
        e.preventDefault();
        const email =e.target.email.value
        const password =e.target.password.value
        console.log(email,password);
        Login(email,password)
        .then(res=>{console.log(res.user)})
        .catch(err=>{setError(err)
        console.log(err)})
    }
  return (
    <div className=''>
        
      <div className="hero h-[80vh] ">
        <div className="hero-content flex-col justify-between gap-20 lg:flex-row rounded-xl">
          <div className=" mx-10 lg:mr-20 my-10 lg:my-0">
            
           <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-1 w-full max-w-md shadow-2xl ">
          <h1 className="text-5xl font-bold text-center text-red-500 py-10">Login</h1>
            <form onSubmit={handleLogin} className="card-body ">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
              <button className="btn my-2 flex justify-center items-center  mx-auto bg-red-500 text-white">Log In</button>
              <Link to='/SignUp'><p className='py-5'>
            New to <span className="text-red-500">Car Doctor</span> ? click here
            to <span className="text-purple-700 font-bold">Sign Up</span>
          </p></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
