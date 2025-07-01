import React from "react";


class UserClass extends React.Component{
    constructor(props){
        console.log("child constructor")
        super(props);

        this.state={
            count: 0,
        }
    }

    componentDidMount(){
        console.log("child component did mount")
    }

    

    render(){  
        console.log("child render") 

        const{name,location}=this.props;
        const {count}= this.state;

             return(
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Count: {count}</h3>
                <button onClick={()=>
                    this.setState({
                        count: this.state.count+1
                })
                }>Increase</button>
            </div>
        )
    }

}

export default UserClass;