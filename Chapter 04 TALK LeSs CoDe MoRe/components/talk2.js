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


const restrauntList = [
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "200701",
    "name": "Sri Udupi Grand",
    "uuid": "72044222-a7ba-420b-a70f-2fb7124f36f8",
    "city": "1",
    "area": "R T Nagar",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "cipxp48z8ecjskh9k43z",
    "cuisines": [
      "South Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 26,
    "minDeliveryTime": 26,
    "maxDeliveryTime": 26,
    "slaString": "26 MINS",
    "lastMileTravel": 5,
    "slugs": {
      "restaurant": "sri-udupi-grand-r.t.-nagar-r.t.-nagar",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "1/1, Ayyapa Complex, Next to LBS College, Near Pushpanjali Theatre, Sultanpalya, R T Nagar, Bengaluru - 560032  Karnataka, India",
    "locality": "Sultanpalya",
    "parentId": 19010,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "200701",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "lastMileTravel": 5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.2",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "30903",
    "name": "Sannidhi Grand",
    "uuid": "3eacf224-7c6d-497e-903a-ebbd2101cc35",
    "city": "1",
    "area": "Kammanahalli",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "glun7fhhutgl0lkgekso",
    "cuisines": [
      "South Indian",
      "North Indian",
      "Chinese",
      "Beverages"
    ],
    "tags": [
      
    ],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 37,
    "minDeliveryTime": 37,
    "maxDeliveryTime": 37,
    "slaString": "37 MINS",
    "lastMileTravel": 9.199999809265137,
    "slugs": {
      "restaurant": "sannidhi-grand-kammanahallikalyan-nagar-kammanahallikalyan-nagar",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "#26, Nehru Road, Yadhav layout, kammanhalli, Bangalore -84",
    "locality": "Yadhav layout",
    "parentId": 21007,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "9.1 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "30903",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "lastMileTravel": 9.199999809265137,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.1",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "556118",
    "name": "The Filter Coffee",
    "uuid": "e29f4071-650c-4c06-b56a-1dbb54306d86",
    "city": "1",
    "area": "Sanjay Nagar",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "omptcztnc8roueqnjdhp",
    "cuisines": [
      "South Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 21,
    "minDeliveryTime": 21,
    "maxDeliveryTime": 21,
    "slaString": "21 MINS",
    "lastMileTravel": 2.5,
    "slugs": {
      "restaurant": "the-filter-coffee-sanjay-nagar,-new-bel-road-sanjay-nagar,-new-bel-road",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "NO. 1, PID No.019-M0021-21, 3rd Floor,KALPANA CHAWLA ROAD, BHOOPASANDRA, HEBBAL, BENGALURU, PIN 560 094",
    "locality": "Bhoopasandra",
    "parentId": 21001,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5668679~p=7~eid=00000185-a3ca-a7ee-29e3-dd1b00dc0739",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "2.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "556118",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "lastMileTravel": 2.5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.6",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "639122",
    "name": "Namaste",
    "uuid": "61f2866f-4b1e-497b-925a-0f8578f4c64a",
    "city": "1",
    "area": "Malleshwaram",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "n7a1waemytumnm8t0pkd",
    "cuisines": [
      "South Indian",
      "Thalis",
      "Snacks",
      "Biryani",
      "Indian",
      "Chinese",
      "Desserts",
      "Beverages"
    ],
    "tags": [
      
    ],
    "costForTwo": 10000,
    "costForTwoString": "₹100 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 28,
    "maxDeliveryTime": 28,
    "slaString": "28 MINS",
    "lastMileTravel": 4.699999809265137,
    "slugs": {
      "restaurant": "namaste-malleshwaram-malleshwaram",
      "city": "bangalore"
    },
    "cityState": "1",
    "address": "501, Ground Floor, Lakke Gowda Mansion, Sampige Road, Malleshwaram -560003",
    "locality": "Sampige Road",
    "parentId": 366271,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹90 | Use code WELCOME50",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "NEW"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        
      ],
      "totalFees": 0,
      "message": "",
      "title": "",
      "amount": "",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "4.6 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "639122",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "lastMileTravel": 4.699999809265137,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.2",
    "totalRatings": 100,
    "new": true
  },
  "subtype": "basic"
},
];



//Suppose the name doen't exist, we've to use this (?.) this is called optional chaining ?. this is js not react
// We need not to always call them as props.. we can calll any like properties, parameters etc.. but mostly prefer props as its widely used in real time
// props are nothing but objects
const RestrauntCard = (props) => {
    console.log(props);
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + 
            restrauntList[1].data?.cloudinaryImageId
        } 
        />
            <h2>{restrauntList[0].data?.name}</h2>
            <h3>{restrauntList[0].data?.cuisines.join(",")}</h3>
            <h4>{restrauntList[0].data?.avgRating} stars</h4>
        </div>
    );
};


// React wraps up all these properties restrauntList[0].... into  a variables which is known as props in above function
// props - properties
// passing data/properties to your components (passing props)
// At the end  restrauntList[0].... this is a function call {RestrauntCard(restrauntList[0]}) ryt
// we can pass multiple props hello= "world"
const Body = () =>{
    return <div className="restraunt-list">
        <RestrauntCard restaurant= {restrauntList[0]} hello= "world" />
        <RestrauntCard restaurant= {restrauntList[1]}/>
        <RestrauntCard restaurant= {restrauntList[2]}/>
        <RestrauntCard restaurant= {restrauntList[3]}/>      
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