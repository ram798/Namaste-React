import { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/img/Swiggy.png";
import useOnline from "../customHooks/useOnline";

const loggedInUser = () => {
    //API call to check user
    return false;
};

const Title = () =>(
    <a href="/">
    <img className="pic" src="https://i.pinimg.com/originals/6a/dd/1d/6add1d3d4e57e975a551b9106a73f20a.jpg"
    alt="logo"/> </a>
);


const Header = () => {
   const isOnline = useOnline();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(

        <div className="head">
            <Title/>

            
        
        <div className="mood">
        <ul>
            
            <li> <Link to = "/AppLayout">Home </Link> </li> 
            <li> <Link to = "/Divein">Divein </Link> </li>
            <li> <Link to = "/Diveout">Diveout</Link></li>
            <li> <Link to = "/Cart">Cart</Link></li> 
            <li> <Link to ="/Instamart">Instamart</Link></li>
        </ul>
        </div>
        <h1>{isOnline ? "🔰" : "🍎"}</h1>
        {
            isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
             ) : ( <button onClick={() => setIsLoggedIn(true)}>Login</button>
       )}
        
        
        </div>
    );
};

export default Header;