import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    return(
    <>
    <div  className="searchcontainer">
      <input type="text" 
      className="searchinput"
       placeholder="search here"
        value=""
       />
       <button className="search-btn">Search</button>
    </div>
    <div className="body">
     {restaurantList.map((restaurant)=>{
      return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
     })}
    </div>
    </>
    );
  };

  export default Body;