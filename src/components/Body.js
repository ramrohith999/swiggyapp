import RestaurantCard, {withPromotedLabel} from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

const Body=()=>{

const[listOfRestaurants,setListOfRestaurants]=useState([]);
const[filteredRestaurants,setFilteredRestaurants]=useState([]);

const [searchText, setSearchText]= useState("");


// https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.406498&lng=78.47724389999999&carousel=true&third_party_vendor=1

useEffect(()=>{
    fetchData();
},[]);

const fetchData=async()=>{
    const data= await fetch(
"https://swiggy-api-4c740.web.app/swiggy-api.json"
   );

    const json= await data.json();

console.log(json);

setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

const onlineStatus=useOnlineStatus();

if(onlineStatus===false) return <h1>Looks like you are offline. please check your internet connection</h1>

const{setUserName, loggedInUser}=useContext(UserContext);


return listOfRestaurants.length === 0 ? (
  <Shimmer />
) : (
  <div className="bg-gray-50 min-h-screen px-6 py-6">
    {/* Search + Filter */}
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between mb-6">
      <div className="flex flex-1 gap-2">
        <input
          type="text"
          placeholder="What do you wanna eat?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400  "
        />
        <button
          onClick={() => {
            const filtered = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg shadow transition cursor-pointer"
        >
          Search
        </button>
      </div>

      <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.5
          );
          setFilteredRestaurants(filteredList);
        }}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow transition cursor-pointer"
      >
        Top Rated Restaurants
      </button>
    </div>

{/* usecontext example */}

<div className="flex items-center gap-3 mb-6">
  <label htmlFor="username" className="text-base text-gray-800 font-semibold">
    Username:
  </label>
  <input
    
    type="text"
    value={loggedInUser}
    onChange={(e) => setUserName(e.target.value)}
    className="w-60 px-4 py-2 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-gray-800 placeholder-gray-400 outline-none transition duration-200"
  />
</div>

    {/* Restaurant Cards Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <Link
          key={restaurant.info.id}
          to={"/restaurants/" + restaurant.info.id}
          className="hover:scale-[1.02] transition-transform duration-300"
        >
          {restaurant.info.veg? 
          (<RestaurantCardPromoted resData={restaurant} />)
          :
           (  
           <RestaurantCard resData={restaurant} />
          )}
        </Link>
      ))}
    </div>
  </div>
);
  
  }

  export default Body;