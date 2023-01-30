import { useEffect, useState } from "react";

const Profile =(props) =>{
const [count, setCount] = useState(0);  
const [count2, setCount2] = useState(0);

useEffect(() => {
    setInterval(() => {
        console.log("Hello React BHAI");
    }, 1000);
}, []);
    return (
        <div>
        <h2>Profile Component!!!</h2>
        <h3>Name: {props.name} </h3>
        <h3>XYZ: {props.XYZ}</h3>
        <h3>count: {count},{count2}</h3>
        <button onClick={() => {
            setCount(1);
             setCount(2)} }
             >Count</button>
        </div>
    );
};

export default Profile;