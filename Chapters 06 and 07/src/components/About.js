import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () =>{
    return (
        <div>
            <h1>About Us Page</h1>
            <p>
                This is the Beginning of the Slice with cucumber😶‍🌫️
            </p>
           <Profile/>
            {/* <Outlet/> //profile comp without using outlet */}
        </div>
    );
};

export default About;

