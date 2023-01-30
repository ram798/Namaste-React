import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"; //We can import default with any name ryt...
import Profile from "./ProfileClass";
import { Component } from "react";


// const About1 = () =>{
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>
//                 This is the Beginning of the Slice with cucumber😶‍🌫️
//             </p>
//             <Profile name= {"Rolex"} AbC={"Bujji"}/> 
//            <ProfileFunctionalComponent name={"Krishna"} XYZ= {"Ram"}/>
//             {/* <Outlet/> //profile comp without using outlet */ }
//         </div>
//     );
// };

// export default About;

// Writing the above in Class Based Comp

// Here, we've imported comp from react
class About extends Component{
    constructor (props){ // We initialise STATE in constructor
        super(props);
        console.log("Parent-Constructor");
    }

    

    componentDidMount(){
        //Best place to make an API call
        console.log("Parent- componentDidMount");
    }

    componentDidUpdate(){
        console.log("Parent-componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Parent-componentwillunmount");
    }
    render(){
        console.log("Parent-render")
        return(
            <div>
            <h1>About Us page</h1>
            <p>This is the Class Based Form of About US</p>
            {/* <ProfileFunctionalComponent name={"Krishna"} /> */}
            <Profile name={"First Child"} AbC={"abc"}/>
            </div>
        );
    };
}

export default About;