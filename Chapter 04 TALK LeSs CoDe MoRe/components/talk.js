import React from "react";
import ReactDOM from "react-dom/client";

/**
         Header
           -logo(title)
           -nav items/listItems(rightside)
           -Cart
         Body
          -Search bar
          -RestauantList
             -RestaurantCards
                 -Image
                 -Name
                 -rating
                 -cuisines/tags
                 should make the restraunt card dynamic bz the name of restaurant and remaining wont stat same..
        Footer
         -links
         -copyright         

         
        
         */


const Title = () => (
     <a href="/">
       <img className="logo"
     src="https://images.template.net/wp-content/uploads/2017/01/30134618/Bar-Logos.jpg"
     alt="logo"/>
    </a>
        );

//Composing Components

const Header = () => {
    return (
        <div className="header">
            <Title/>
           
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}; 


// Config Driven UI

const config =[
    {
        type: "carousel",
        cards:[
            {
                offerName: "50% off"
            },
            {
                offerName: "No Delievery Charge"
            },
        ],
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


const restrauntList = [
    {
        name: "Priya Grand",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
        cuisines: ["South Indian", "North Indian"],
        rating:"4.5"
    },
    {
        name: "Priya Grand",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
        cuisines: ["South Indian", "North Indian"],
        rating:"4.5"
    },
    {
        name: "Priya Grand",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
        cuisines: ["South Indian", "North Indian"],
        rating:"4.5"
    }
]
const priyaGrand = {
    name: "Priya Grand",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c9elzh8awx7jcx70cood",
    cuisines: ["South Indian", "North Indian"],
    rating:"4.5",
}




const RestaurantCard = () => {
    return(
        <div className="card">
            <img src={priyaGrand.image} />
            <h2>{priyaGrand.name}</h2>
            <h3>{priyaGrand.cuisines.join(",")}</h3>
            <h4>{priyaGrand.rating} stars</h4>
        </div>
    );
};


const Body = () =>{
    return <div className="restraunt-list">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>
};

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
};






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