import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';

import AllTorisetSpot from '../components/AllTorisetSpot/AllTorisetSpot';
import Home from '../components/Home/Home';
import AddTouristsSpot from '../components/AddTouristsSpot/AddTouristsSpot';
import MyList from '../components/MyList/MyList';
import Login from '../components/Login/Login';
export const router = createBrowserRouter([
   {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
           path:'/all-tourists',
           element:<AllTorisetSpot></AllTorisetSpot>
        },
        {
            path:'/add-tourists',
            element:<AddTouristsSpot></AddTouristsSpot>
        },
        {
            path:'/my-list',
            element:<MyList></MyList>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
    ]
   }
])