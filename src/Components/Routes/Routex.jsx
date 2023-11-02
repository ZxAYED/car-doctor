
import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main';
import Home from '../Home/Home';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import CheckOut from '../CheckOut/CheckOut';
import Bookings from '../CheckOut/Bookings';
import PrivateRoutes from './PrivateRoutes';





 const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
       
        children:[
            {
                path:'/',
                element:<Home></Home>,

            },
            {
                path:'/Login',
                element:<Login></Login>

            },
            {
                path:'/SignUp',
                element:<SignUp></SignUp>

            },
            {
                path:'/bookings',
                element: <PrivateRoutes><Bookings/></PrivateRoutes>

            },
            {
                path:'/services/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=>{
                 return   fetch(`http://localhost:5001/services/${params.id}`)
                }

            },

        ]
      },
    ]);
 


export default router;