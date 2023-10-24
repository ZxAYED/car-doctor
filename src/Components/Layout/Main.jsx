import { Outlet } from "react-router-dom";
import Footer from './Footer';
import NavBar from './NavBar';


const Main = () => {
    return (
        <div >
            <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;