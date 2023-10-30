
/***
 *Header
  -Titile (logo) 
  -Nav items(Home,about)
  -cart
 * Body
  -Search bar
  -RestaurantList
    -Restaurant image
    -restaurant name
    -restrurant rating
 *  Footer
    -Footer Links
 */

import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";      
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile"
  
  const Applayout =()=>{
      return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
      );
  };


  const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <Applayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
          children: [{ // nested routing
            path: "profile",
            element: <Profile />,
          }]
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "restaurant/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter}/>);
