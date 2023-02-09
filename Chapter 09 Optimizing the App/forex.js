import React ,{lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Divein from "./src/components/Divein";
import Error from "./src/components/Error";
import Diveout from "./src/components/Diveout";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";

const Instamart = lazy(() => import("./src/components/Instamart"));
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