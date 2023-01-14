import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";  
import Body from "./components/Body";
import Footer from "./components/Footer";


    // const config =[
    //     {
    //         type: "carousel",
    //         cards:[],
    //     },
    //     {
    //         type: "restaurants",
    //         cards:[
    //             {
    //         name: "BURGER KING",
    //         image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
    //         cuisines: ["South Indian", "North Indian"],
    //         rating:"4.5",
    //             },
    //     {
    //         name: "KFC",
    //         image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
    //         cuisines: ["South Indian", "North Indian"],
    //         rating:"4.5",
    //     },
    //     {
    //         name: "MCd",
    //         image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
    //         cuisines: ["South Indian", "North Indian"],
    //         rating:"4.5",
    //      },
    //    ],
    //   },
    // ];


      const AppLayout = () => {
            return (
                <>
                 <Header/>
                 <Body/>
                 <Footer/>  
                 </>
            );
        };
        const smudge = ReactDOM.createRoot(document.getElementById("dani"));
        smudge.render(<AppLayout/>);

    