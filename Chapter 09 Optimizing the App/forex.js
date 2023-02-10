import React ,{lazy, Suspense,useState}from "react";
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
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("./src/components/Instamart"));
const AppLayout = () => {
const [user, setUser] = useState({
    name:"Krishna",
    email:"support@nenedevdu.com",
});

    return(
     <UserContext.Provider value={{
        user: user,
        setUser : setUser
     }}>   
        <Header/>
        <Outlet/>
        <Footer/>
        </UserContext.Provider>
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
                element:<Body 
                 user={{
                    name: "Namaste React",
                    email: "support@namastedev.com",
                }}/>,
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