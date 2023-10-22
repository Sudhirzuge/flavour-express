
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

  
  const Applayout =()=>{
      return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
      );
  };

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<Applayout/>);
