import { useEffect, useState } from "react";
import {RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants){
    const filterData = restaurants.filter((restaurant)=>
    restaurant.data.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
}


export const Body = () => {
    // const searchTxt = "KFC";
    //allRestaurants is required to search and to filter
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    
    useEffect(() => {
        //API call
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    // const [searchClicked, setSearchClicked] = useState("");
    
    // not render component (Early return)
    if (!allRestaurants) return null;

    // if(filteredrestaurants?. length === 0)
    // return <h1>No Restaurant Match your Filter!!!!</h1>;
    
    return (allRestaurants?.length ===0 ) ? <Shimmer/> : (
      <>
      <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange = {(e) => {
            setSearchInput(e.target.value);
        }}
        />
        {/* <h1>{searchClicked}</h1> */}
        <button className="search-btn" onClick={(e) => {
            // setSearchClicked("true");
            // if (searchClicked === "true") {
            //     setSearchClicked("false");
            // } else {
            //     setSearchClicked("true");
            // }
            //need to filter data
            //update the state and update the state i.e restaurant var
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
        }}> 
        Search </button>
        {/* Search - {searchInput}</button> */}
      </div>
       <div className="restaurant-list"> 
          {/*You have to write logic for NO restaurant found here */}
          { 
             filteredrestaurants.map((restaurant) => {
                 return <Link to = {"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                 
                 <RestaurantCard {...restaurant.data} />
                 </Link>
             })
          }
        </div>
        </>
        
     );
 };