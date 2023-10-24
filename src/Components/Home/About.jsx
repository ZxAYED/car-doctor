import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div>
            <div className="hero mt-20 mb-20">
  <div className="hero-content flex-col lg:flex-row  lg:gap-20">
    <div className='lg:w-1/2 p-10 relative'>
    <img className='h-[400px] object-cover' src={img1} />
    <div className='absolute top-[55%] left-[40%] bg-white '>
    <img className='h-92 object-cover p-2 'src={img2} /></div>
    </div>
    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">Masters of the Craft: Decades of Experience in Car Servicing</h1>
    
      <p className="py-6 pb-8">Step into the world of automotive excellence with our seasoned experts who are not just qualified but carry decades of hands-on experience in the field. At [Your Company Name], we understand that your vehicle is more than just a mode of transportation; it's a part of your daily life. Our teams extensive expertise ensures that every service we offer is executed with precision and finesse, resulting in a well-maintained, high-performance vehicle that stands the test of time. With our deep-rooted knowledge and commitment to perfection, your car is in the best hands. Choose us for a car servicing experience that truly stands out.</p>
      <button className="btn bg-red-500 text-white">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;