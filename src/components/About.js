import React from "react";
import User from "./User";
import UserClass from "./Userclass";
import UserContext from "../utils/UserContext";

class About extends React.Component{

constructor(props){
    super(props);
    console.log("parent constructor ")
}

componentDidMount(){
    console.log("parent component did mount")
}



render(){
    console.log("parent render")
   return(
        <div className="about-container max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About Us</h1>
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hi, I'm a passionate front-end developer with a love for building interactive and user-friendly web applications. I specialize in the React ecosystem and am always exploring new technologies to enhance user experience. This project is a part of my learning journey, and I'm constantly working to improve and deliver clean, scalable code.
        </p>
      
        <div className="bg-gray-100 p-4 rounded-md shadow-sm flex items-center space-x-2">
          <span className="text-gray-600 font-medium">Logged in User:</span>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <span className="text-blue-600 font-semibold text-lg">
                {loggedInUser}
              </span>
            )}
          </UserContext.Consumer>
        </div>

{/* 
        <User
       name = "Ram Rohith" location="Dallas"
        />
        
        <UserClass
            name= "Sunny" location="Hyderabad"
        /> */}
        </div>
    )
}


}



export default About;