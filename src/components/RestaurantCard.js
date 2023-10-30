import { IMAGE_CDN_URL } from "../constants";

//here we just pass the multiple props
// const RestaurantCard=({name,cuisines,lastMileTravelString,cloudinaryImageId})=>{
//     return(
//      <div className="card">
//   <img src={IMAGE_CDN_URL+cloudinaryImageId}/>
//      <h2>{name}</h2>
//      <h3>{cuisines.join(", ")}</h3>
//      <h3>{lastMileTravelString} Distance</h3>
//      </div>
     
//     );
//   };

//   export default RestaurantCard;




  import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL+cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;