import React ,{lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Divein from "./components/Divein";
import Error from "./components/Error";
import Diveout from "./components/Diveout";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
    return(
     <>   
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {   path:"/Home",
                element:<AppLayout/>,
            },
            {
                path:"/Divein",
                element:<Divein/>
            },
            {
                
                    path:"/Diveout",
                    element:<Diveout/>,
                
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/Instamart",
                element:(
                <Suspense fallback= {<Shimmer/>}>
                    <Instamart/>
                </Suspense>),
            }
        ]
    },
    
]);


const ghora = ReactDOM.createRoot(document.getElementById("mood"));
ghora.render(<RouterProvider router={appRouter}/>);