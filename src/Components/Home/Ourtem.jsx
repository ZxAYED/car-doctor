import img1 from '../../assets/images/team/1.jpg'
import img2 from '../../assets/images/team/2.jpg'
import img3 from '../../assets/images/team/3.jpg'
const Ourtem = () => {
    return (
     
        <div className='my-24'>
            <section className="text-center">
                <h1 className="text-5xl my-6 font-bold ">Meet Our Team</h1>
                <p className="my-4">Our team at  <span className="text-red-500 font-semibold">Car Doctor </span> is a collective of passionate individuals who share a common love for all things automotive. Each member is handpicked not only for their technical proficiency but also for their dedication to ensuring your driving experience is nothing short of exceptional.

                    From our certified technicians with years of hands-on experience to our customer service representatives who are always ready to assist you, we're a team that works seamlessly to provide you with the highest standard of car servicing. We don't just fix cars; we breathe life into them.

                    With a shared commitment to precision, innovation, and customer satisfaction, we stand united to keep you and your vehicle safe, reliable, and ready for the road. When you choose  <span className="text-red-500 font-semibold">Car Doctor </span>, you're not just choosing a service; you're becoming a part of our automotive family.
                </p></section>

                <section className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-16 text-center'>
                <div className='border-2 rounded-xl'>
             <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="700" className="  "> 
            <div className="card  shadow-xl">
  <figure className="px-5 pt-5">
    <img src={img1} alt="image" className="rounded-2xl h-60 object-cover  " />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-bold text-red-500"> Master Mechanics: The Heart of Precision</h2>
    <p>Our Master Mechanics are the backbone of our car servicing operation. With a wealth of experience and extensive training in the intricacies of modern and classic vehicles alike, they are the wizards under the hood. From routine maintenance to complex repairs, their expert hands work tirelessly to ensure your vehicle is in prime condition. Their keen eye for detail and unwavering commitment to precision make them the guardians of your automotive dreams. Trust our Master Mechanics to bring your car back to life.</p>
   
  </div>
</div>
        </div>
        </div>
                <div className='border-2 rounded-xl'>
             <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="700" className="  "> 
            <div className="card  shadow-2xl">
  <figure className="px-5 pt-5">
    <img src={img2} alt="image" className="rounded-xl h-60 object-cover  " />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-bold text-red-500"> Automotive Technologists: Pioneers of Innovation</h2>
    <p>Our Automotive Technologists are the forward-thinkers in the industry, always pushing the boundaries of innovation. With a deep understanding of the latest automotive technologies and a passion for staying ahead of the curve, they ensure your vehicle benefits from cutting-edge advancements. From eco-friendly solutions to performance enhancements, they are the architects of the future for your car. When you seek technological excellence in your vehicle, our Automotive Technologists are the driving force behind the transformation.</p>
   
  </div>
</div>
        </div>
        </div>
                <div className='border-2 rounded-xl'>
             <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="700" className="  "> 
            <div className="card   shadow-xl">
  <figure className="px-5 pt-5">
    <img src={img3} alt="image" className="rounded-2xl h-60 object-cover  " />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-bold text-red-500">  Customer Care Champions: Your Automotive Allies</h2>
    <p>Our Customer Care Champions are the friendly faces and voices that connect you with our services. Their dedication to your satisfaction and their in-depth knowledge of our offerings ensure that you have a seamless experience from the moment you contact us. Whether it's scheduling an appointment, answering your questions, or offering expert guidance, our Customer Care Champions are here to make your journey with us smooth and enjoyable. We take pride in our exceptional customer service team, ensuring that your needs are always met with a smile.</p>
   
  </div>
</div>
        </div>
        </div>
                </section>
        </div>
    );
};

export default Ourtem;