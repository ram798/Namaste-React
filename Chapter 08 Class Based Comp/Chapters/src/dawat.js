import React from "react";
import ReactDOM from "react-dom/client";
// import {logo} from "./Daawat/logo.png";
// // import {IconName} from "react-dom/fa";

// // With Plain JS
// const heading = document.createElement("h1");
// heading.innerHTML = "THis Is A MuLti CuiSiNe rEsTaUrAnT";
// const root = document.getElementById("root");
// root.appendChild(heading);



// const heading2 = React.createElement("h2" , {id: 'title',}, "where taste kiss the HUNGER");
// const heading3 = React.createElement("h3", {id:"title"}, "THe place where minds stop");
// const wrapper = React.createElement("div", {id:"container"} , [heading2, heading3]);
// // const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// // root2.render(wrapper);

// const h1 = React.createElement("div", {id:"title"}, [
//      React.createElement("h1" , {id:"title", key:2014}, "Freaking Introvet"),
//      React.createElement("h1", {id:"title", key:2015}, "FUcking Introvet"),
//      React.createElement("h1", {id:"title",key:2016}, "Bullying Introvet")

// ]);

// const dew = ReactDOM.createRoot(document.getElementById("boost"));
// dew.render(h1);

// const head = ( 
//     <div className="title1">
//     <h1 id="title">THis is one</h1>
//     <h2 id="title">This is Two</h2>
//     <h3 id="title">This is Three</h3>
//     </div>
// );
// const joe = ReactDOM.createRoot(document.getElementById("ben"));
// joe.render(head);

// const FunctionComponent =() =>{
//     return (
//         <div className="title2">
//             <h1 id="title">THis is test</h1>
//             <h1 id="title">THis is west</h1>
//             <h1 id="title">THis is best</h1>
//             {will}
//             {wrapper}
//             {/* <DoNothing/> */}
//         </div>
//     );
// };
// const rise = ReactDOM.createRoot(document.getElementById("push"));

// rise.render(<FunctionComponent/>);

// const will = (<h1 id="slow">
//     "COde to Practice not to prove"
// </h1>);
// // const jai = ReactDOM.createRoot(document.getElementById("smeed"));
// // jai.render(will);

// const HeaderComponent = () =>{
//     return (
//         <>
//        <div className="lucky">
//         <img src= {logo} alt = "bitch" height="20px" width="20px"/>
//        </div>
//         </>
//     );
// };
// const logs = ReactDOM.createRoot(document.getElementById("akil"));
// <HeaderComponent/>;

// const SearchComponent =()=> {
//     return (
//         <input 
//         className="search"
//         key={'search-bar'}
//         type= "{text}"
//         placeholder="{search-anything}"
//        />
//     );
// };
// const log = ReactDOM.createRoot(document.getElementById("akila"));
// <SearchComponent/>;


// const CHildA = (
//     <h1>LOVe</h1>
// );
// const CHildB = (
//     <h1>LOVe</h1>
// );
// const CHildC = (
//     <h1>LOVe</h1>
// );
// const CHildD = (
//     <h1>LOVe</h1>
// );
// const jsx =(
//     <>
//     <CHildA />
//     <>
//     <CHildB/>
//     <CHildC/>
//     </>
//     <CHildD/>
//     </>
// );
import Header from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";



// const burgerKing ={
//     name: "Burger King",
//     image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/e0vvulfbahjxjz6k4uwi",
//     cuisines: ["American","Burger"],
//     rating:"4.2"
// }

const AppLayout = ()=> {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}


const appRouter = createBrowserRouter([ //list of paths
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "about",
                element: <About/>,
                children: [{
                    path:"Profile",
                    element:<Profile/>
                },
            ],
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:id",
                element:<RestaurantMenu/>
            },
        ], 
    },
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);

