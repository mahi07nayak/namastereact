
import { IMG_CDN } from "./constant";
import { restrauntList } from "./constant";
// import { useState } from "react";

// const [restrauntLists,setrestrauntLists]=useState([]);

const Body=()=>{
    return(
        <div className="listhotels">
           {restrauntList.map((resturant) => (
               <Resturantcard key={resturant.info.id} resturant={resturant} />
            ))}
         </div>);    
}

// ✅ Component name starts with a capital letter
const Resturantcard=({resturant})=>{
    return(
        <div className="card">
            <img src={IMG_CDN+resturant?.info?.cloudinaryImageId }/>
        <h2>{resturant?.info?.name||"not available"}</h2>
        <h2>{resturant?.info?.cuisines?.join(",")||"not available"}</h2>
        </div>
    );
}
export default Body;





/*
  import { IMG_CDN } from "./constant";
import { restrauntList } from "./constant";

// ✅ Component name starts with a capital letter
const RestaurantCard = ({ resturant }) => {
    return (
        <div className="card">
            <img src={IMG_CDN + resturant?.info?.cloudinaryImageId} alt="Restaurant" />
            <h2>{resturant?.info?.name || "Not available"}</h2>
            <h3>{resturant?.info?.cuisines?.join(", ") || "Not available"}</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="listhotels">
            {/* ✅ Map through the list and pass each item to RestaurantCard *//*}
            {restrauntList.map((resturant) => (
                <RestaurantCard key={resturant.info.id} resturant={resturant} />
            ))}
        </div>
    );
};

export default Body;

 */