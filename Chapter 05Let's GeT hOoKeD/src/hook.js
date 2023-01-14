import React from "react";
import ReactDOM from "react-dom/client";
// import {Title} from "./components/Header"; //named import
import Header from "./components/Header";  //default import
import Body from "./components/Body";
import Footer from "./components/Footer";

// import { Title, Header } from "./components/Header"; // When we've named export for both we can use like this
// import Header, {Title} from ".components/Header.js"; /.js ,.jsx too works, no problem/ one named and one default 
// import ReactDOM, {createRoot} from "react-dom/client";// createroot will be imported as named export
// import newHeader from "./components/Header"; //can rename the default
// import * as XYZ from "./components/Header";
    const config =[
        {
            type: "carousel",
            cards:[],
        },
        {
            type: "restaurants",
            cards:[
                {
            name: "BURGER KING",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
            cuisines: ["South Indian", "North Indian"],
            rating:"4.5",
                },
        {
            name: "KFC",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
            cuisines: ["South Indian", "North Indian"],
            rating:"4.5",
        },
        {
            name: "MCd",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
            cuisines: ["South Indian", "North Indian"],
            rating:"4.5",
         },
       ],
      },
    ];


      
        
        const AppLayout = () => {
            return (
                <>
                {/* <newHeader/> */}
                 {/* <XYZ.Header/> */}
                 {<Header/>}
                 <Body/>
                 <Footer/>  
                 </>
            );
        };
        const smudge = ReactDOM.createRoot(document.getElementById("dani"));
        smudge.render(<AppLayout/>);

    