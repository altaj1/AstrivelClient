import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";

import AllTorisetSpot from "../components/AllTorisetSpot/AllTorisetSpot";
import Home from "../components/Home/Home";
import AddTouristsSpot from "../components/AddTouristsSpot/AddTouristsSpot";
import MyList from "../components/MyList/MyList";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import UpdateSpot from "../components/Update/UpdateSpot";
import PrivetRout from "../components/privetRout/PrivetRout";
import CountriDeatile from "../components/Home/CountriDeatile/CountriDeatile";
import ErrorPages from "../components/ErrorPages/ErrorPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

        loader: () =>
          fetch(
            "https://astrovel-server.vercel.app/all-torists"
          ),
      },
      {
        path: "/all-tourists",
        loader: () =>
          fetch(
            "https://astrovel-server.vercel.app/all-torists"
          ),
        element: <AllTorisetSpot></AllTorisetSpot>,
      },
      {
        path: "/add-tourists",
        element: (
          <PrivetRout>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivetRout>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivetRout>
            <MyList></MyList>
          </PrivetRout>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/view-deatils/:id",
        loader: ({ params }) =>
          fetch(
            `https://astrovel-server.vercel.app/view-deatils/${params.id}`
          ),
        element: (
          <PrivetRout>
            <ViewDetails></ViewDetails>
          </PrivetRout>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://astrovel-server.vercel.app/view-deatils/${params.id}`
          ),
        element: (
          <PrivetRout>
            <UpdateSpot></UpdateSpot>
          </PrivetRout>
        ),
      },
      {
        path: "/countri-deatiel/:countri",
        loader: ({ params }) =>
          fetch(
            `https://astrovel-server.vercel.app/country/${params.countri}`
          ),
        element: <CountriDeatile></CountriDeatile>,
      },
    ],
  },
]);
