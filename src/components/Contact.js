import React, { useEffect, useState } from 'react'

const Contact = () => {

// const[userData,setUserData]=useState([]);

// useEffect(()=>{
//   fetchgit();
// },[]);

// const fetchgit= async() =>{
//   const data= await fetch("https://api.github.com/users/ramrohith999");
//   const json= await data.json();
//   console.log(json);
//   setUserData(json);

  
// }

// const{name,avatar_url}=userData;

  return (
    <div>
        {/* <h1 className='text-3xl m-12 w-16'>{name}</h1>
        <img className='w-80 ' src={avatar_url} alt="not rendered" /> */}

        <div>
          <h1>contact</h1>
        <label>Name: </label>
          <input type="text" className='border border-black text-lg m-2 p-2'  />
          <label>message: </label>
          <input type="text" className='border border-black text-lg m-2 p-2'  />
          <button className='border border-black rounded-lg text-white shadow-md bg-amber-950 p-4 m-4 cursor-pointer '>Submit</button>
          
        </div>

    </div>
  )
}

export default Contact