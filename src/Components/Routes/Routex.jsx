
import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main';
import Home from '../Home/Home';
import Login from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';


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

        ]
      },
    ]);
 


export default router;