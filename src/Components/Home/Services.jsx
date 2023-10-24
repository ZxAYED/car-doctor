import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-4">Excellence on Wheels: Our Comprehensive Car Servicing Services</h1>
            <p className="text-center py-5"> At Car Doctor, we take immense pride in offering "Excellence on Wheels" through our comprehensive car servicing services. With a dedicated commitment to enhancing your vehicle's performance and longevity, our team of skilled technicians and professionals employ cutting-edge techniques and state-of-the-art equipment to ensure your car is in its prime condition. From routine maintenance to intricate repairs, we cover it all, with a focus on precision and attention to detail. When you entrust us with your vehicle, you're choosing excellence, reliability, and a commitment to delivering a driving experience like no other. Discover the true potential of your car with our exceptional car servicing services.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-16">
            {
                services?.map(items=><ServiceCard items={items} key={items._id}></ServiceCard>
                    )
            }</div>
        </div>
    );
};

export default Services;