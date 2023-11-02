import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
    useEffect(()=>{
        AOS.init();
       },[])
    
    return (
        <div>
             <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="700" className="  "> 
            <div className="card bg-slate-600  shadow-xl">
  <figure className="px-5 pt-5">
    <img src={img} alt="image" className="rounded-xl h-60 object-cover  " />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-bold text-red-500">{title}</h2>
    <p>{price} $</p>
    <button className="btn my-2 flex justify-center items-center  mx-auto bg-red-500 text-white">Buy Now!</button>
  </div>
</div>
        </div>
        </div>
    );
};

export default Products;