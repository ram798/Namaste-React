import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/img/logos.png";
const loggedInUser = () => {
    //API call to check authentication
    return false;
};
const Title = () => (
    <a href="/">
   <img className="logo"    
   src="https://cdn0.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=1200,h=675,q=90/attachments/photos/794216/original/Swiggy-One-Logo-edt.png"
//    src={Logo}
   alt="logo" />
  </a>
   );


   const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

   
       return (
      <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                  <li><Link to ="/">Home</Link></li> 
                  <Link to ="/About"> <li>About</li> </Link>
                    <li>Help</li>
                    <li><Link to ="/Contact">Contact</Link></li>
                    <li>Sign in</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? 
            
            <button onClick={() => setIsLoggedIn(false)}>Login</button> :
            <button onClick={() => setIsLoggedIn(true)}>Logout</button>
   }
        </div> 
    );
   
};

export default Header;