import { useState } from "react";
import ItemList from "./ItemList.js";
const RestaurantCategory=({data,showItems,setShowIndex})=>{



    const handleClick=()=>{
        setShowIndex();
        

        
    }
    // console.log(data);
    return(
        <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
             <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-lg">⌄</span>
            </div>
               { showItems &&<ItemList items={data.itemCards}/> } 
        </div>
    )
}

export default RestaurantCategory