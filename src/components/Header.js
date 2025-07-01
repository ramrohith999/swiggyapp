import { useEffect, useState, useContext } from "react";
import { CART_LOGO, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnName, setBtnName]=useState("Login");

    useEffect(()=>{
        //console.log("useeffect called");
    },[]);

    const onlineStatus=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);


    const cartItems= useSelector((store)=>store.cart.items);

    return(
      <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
  {/* Logo + Online Status */}
  <div className="flex items-center gap-3">
    <img
      src={LOGO_URL}
      className="w-28 md:w-32 rounded-lg hover:scale-105 transition-transform duration-300"
    />
    <span
      className={`text-sm font-semibold ${
        onlineStatus ? "text-green-600" : "text-red-500"
      }`}
    >
      {onlineStatus ? "✅ Online" : "🔴 Offline"}
    </span>
  </div>

  {/* Navigation Items */}
  <ul className="flex items-center gap-6 text-gray-800 font-medium text-sm md:text-base">
    <li className="hover:text-red-600 transition ">
      <Link to="/">Home</Link>
    </li>
    {/* <li className="hover:text-red-600 transition ">
      <Link to="/grocery">Grocery</Link>
    </li> */}
    <li className="hover:text-red-600 transition ">
      <Link to="/about">About Us</Link>
    </li>
    <li className="hover:text-red-600 transition ">
      <Link to="/contact">Contact</Link>
    </li>

    {/*  Cart */}
    <li className="relative group">
      <Link to="/cart" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200 ">
      <img
        src={CART_LOGO}
        alt="Cart"
        className="w-14 h-14 hover:scale-110 transition-transform duration-300 cursor-pointer"
      />
      - <span className=" text-md">({cartItems.length} items)</span>
      
      </Link>
           
    </li>

    <li className="px-4 font-bold ">
      {loggedInUser}
    </li>

    {/* Login/Logout Button */}
    <li>
      <button
        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-1.5 rounded-full shadow-md transition duration-300 cursor-pointer"
        onClick={() => {
          setBtnName(btnName === "Login" ? "Logout" : "Login");
        }}
      >
        {btnName}
      </button>
    </li>
  </ul>
</div>
    )
  }
  
  export default Header;