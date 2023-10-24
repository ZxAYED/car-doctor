import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import img from '../../assets/images/ab0ut.png'
import Ourtem from './Ourtem';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <button className="btn my-10 flex justify-center items-center  mx-auto bg-red-500 text-white">Get More Info</button>
            <div className="my-16"><img className=" h-60 w-full rounded-xl " src={img} alt="" /></div>
            <Ourtem></Ourtem>
        </div>
    );
};

export default Home;