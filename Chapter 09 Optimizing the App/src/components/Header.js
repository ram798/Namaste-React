import { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/img/Swiggy.png";
import useOnline from "../../customHooks/useOnline";

const loggedInUser = () => {
    //API call to check user
    return false;
};

const Title = () =>(
    <a href="/">
    <img className="h-20 p-2"  src="https://i.pinimg.com/originals/6a/dd/1d/6add1d3d4e57e975a551b9106a73f20a.jpg"
    alt="logo"/> </a>
);


const Header = () => {
   const isOnline = useOnline();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(

        <div className="flex justify-between sm-bg-pink-50 shadow-lg bg-blue-400 ">
            <Title/>

            
        
        <div >
        <ul className="flex py-10">
            
            <li className="px-2"> <Link to = "/AppLayout">Home </Link> </li> 
            <li className="px-2"> <Link to = "/Divein">Divein </Link> </li>
            <li className="px-2"> <Link to = "/Diveout">Diveout</Link></li>
            <li className="px-2"> <Link to = "/Cart">Cart</Link></li> 
            <li className="px-2"> <Link to ="/Instamart">Instamart</Link></li>
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