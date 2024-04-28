import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';

import AllTorisetSpot from '../components/AllTorisetSpot/AllTorisetSpot';
import Home from '../components/Home/Home';
import AddTouristsSpot from '../components/AddTouristsSpot/AddTouristsSpot';
import MyList from '../components/MyList/MyList';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import ViewDetails from '../components/ViewDetails/ViewDetails';
import UpdateSpot from '../components/Update/UpdateSpot';
import PrivetRout from '../components/privetRout/PrivetRout';
import CountriDeatile from '../components/Home/CountriDeatile/CountriDeatile';

export const router = createBrowserRouter([
   {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:4000/all-torists"),

        },
        {
           path:'/all-tourists',
           loader:()=>fetch("http://localhost:4000/all-torists"),
           element:<AllTorisetSpot></AllTorisetSpot>
        },
        {
            path:'/add-tourists',
            element:<PrivetRout><AddTouristsSpot></AddTouristsSpot></PrivetRout>
        },
        {
            path:'/my-list',
            element:<MyList></MyList>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:"/view-deatils/:id",
            loader:({params})=>fetch(`http://localhost:4000/view-deatils/${params.id}`),
            element:<ViewDetails></ViewDetails>
        },
        {
            path:'/update/:id',
            loader: ({params})=>fetch(`http://localhost:4000/view-deatils/${params.id}`),
            element:<UpdateSpot></UpdateSpot>,
            
        },
        {
            path:"/countri-deatiel/:countri",
            loader:({params})=>fetch(`http://localhost:4000/country/${params.countri}`),
            element: <CountriDeatile></CountriDeatile>
        }
    ]
   }
])