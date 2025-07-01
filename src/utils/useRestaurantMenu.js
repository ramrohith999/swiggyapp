import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";

const useRestaurantMenu=(resId)=>{

const [resInfo,setResInfo]=useState(null);

useEffect(()=>{
fetchData();
},[])

const fetchData=async()=>{
    const data = await fetch(RESTAURANT_URL+ resId);
    const json= await data.json();
    setResInfo(json.data);
}

return resInfo;
}

export default useRestaurantMenu;