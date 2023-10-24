import { useState, useEffect } from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'


const Banner = () => {



    const images = [
     img1, img2,img3,img4,img5, img6 ];
    
   
     const [currentIndex, setCurrentIndex] = useState(0);


     useEffect(() => {
       const interval = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
       }, 3000); //
   
   
       return () => clearInterval(interval);
     }, [images.length]);
   
   
     return (
       <div>
       <div className="relative w-full h-[80vh]  mb-10 ">
         {images.map((image, index) => (
           <div
             key={index}
             className={`absolute w-full h-full transition-opacity rounded-xl duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
               }`}
           >
             <img
               src={image}
               alt={`Slide ${index}`}
               className="w-full h-full object-fit rounded-lg"
             />
             <div className='absolute top-0 pl-20 pt-10 flex flex-col rounded-xl  left-0 h-full w-[45%] bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00)   p-6'>
                <h1 className='text-5xl font-bold text-white py-2'>
                Unleash Peak Performance with Our Expert Car Servicing!
                </h1>
                <p className='text-white pb-5 pt-5 text-lg'>Experience top-tier car servicing and rejuvenate your vehicles vitality.Our experts deliver unmatched performance enhancements and care for your automotive companion.</p>
                <div className='flex mt-6 justify-center items-center gap-5  '>
                <button className=" btn text-white  bg-red-500  ">Discover more</button>
                <button className=" btn btn-outline text-white" >Latest Projects </button></div>
                
             </div>
           </div>
         ))}
         </div>
       </div>
     );
   };
   
    
export default Banner;