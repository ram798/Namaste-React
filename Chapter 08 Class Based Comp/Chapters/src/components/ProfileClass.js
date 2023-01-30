import React from "react";
import { Component } from "react";
import { json } from "react-router-dom";

class Profile extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     count:0,
        //     count:1,
        // },
        this.state= {
            userInfo:{
                name:"Dummy Name",
                location:"Dummy location",
            },};
        
        console.log("Child-constructor");
    }

    componentDidMount() {
        setInterval(() => {
            console.log("Hello React BHAI");
        }, 1000);
        console.log("Child - componentDidMount");
    }


    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log("Child-componentDidMount");
    }

render(){
    const {count} = this.state;
    console.log("Child-render"); //destructuring
    return(
    <div>
   

    {/* <h2>name:{this.props.name}</h2>
    <h2>AbC:{this.props.AbC}</h2> */}
    {/* <h2>count:{this.state.count}</h2> */}
    {/* <h2>count :{count}</h2>
    <button onClick={() => {this.setState ( {
        count:1,
        count:2}
    );}}>SetCount </button> */}
    
     <h1>Profile class Component</h1>
    <img src={this.state.userInfo.avatar_url}/>
    <h2>Name:{this.state.userInfo.name}</h2>
    <h2>Location:{this.state.userInfo.location}</h2>
    </div>
  );
 }
}

export default Profile;