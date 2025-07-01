import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard=(props)=>{
    const{resData}=props;
  
    const{cloudinaryImageId, name, cuisines=[], avgRating, costForTwo,sla,}=resData?.info;

    const{loggedInUser}= useContext(UserContext); 
  
    return (
      <div className="w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden cursor-pointer">
        {/* Image */}
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-40 object-cover"
        />
    
        {/* Info Section */}
        <div className="p-3">
          <h3 className="text-md font-semibold text-gray-800 truncate">{name}</h3>
          <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
    
          <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
            <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
              ★ {avgRating}
            </span>
            <span className="text-xs">{costForTwo}</span>
          </div>
    
          <p className="text-xs text-gray-500 mt-1">{sla?.slaString}</p>
          <h4>User: {loggedInUser}</h4>
        </div>
      </div>
    );
  }

  export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
      return(
        <div >
          <label className="absolute bg-green-700 text-white m-2 p-2 rounded-lg">Veg</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;