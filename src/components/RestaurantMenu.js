// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestauratCategory";
import { useState } from "react";


const RestaurantMenu=()=>{

const {resId}=useParams();

const resInfo= useRestaurantMenu(resId);

const[showIndex, setShowIndex]=useState(null);


 if (resInfo=== null) return <Shimmer />;

const {name, cuisines, costForTwoMessage}= resInfo.cards[2]?.card?.card?.info;

const itemCards = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
?.find(c => c?.card?.card?.itemCards)
?.card?.card?.itemCards || [];

const categories = resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
// console.log(categories);


      return(
        <div>
        <div className="mb-6 text-center">
  <h1 className="text-3xl font-bold text-gray-900 ">{name}</h1>
  <p className="text-gray-600 text-base">{cuisines.join(", ")}</p>
  <p className="text-sm text-gray-500 mt-1">{costForTwoMessage}</p>
  </div>
        <div>
          {categories.map((category,index) => (
            <RestaurantCategory 
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index===showIndex ? true : false}
          // setShowIndex={()=>setShowIndex(index)}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
          />
          ))}
        </div>
      </div>
      )


}

export default RestaurantMenu;



//