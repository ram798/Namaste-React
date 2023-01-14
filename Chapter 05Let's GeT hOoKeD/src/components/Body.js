import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";



function filterData(searchText, restaurants) {

 const filterData =   restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText)
    );
    return filterData;
}
const Body = () =>{
     const [restaurants, setRestaurants] = useState(restaurantList);
     const [searchText, setSearchText] = useState();
     const [searchClicked, setSearchClicked] = useState("");
return (
        <>
        <div className="search-container">
            <input type= "text" 
            className="search-input" 
            placeholder="Search"
            value={searchText}
            onChange = {(e) => {
                setSearchText(e.target.value);
            }}
            />
            <h1>{searchClicked}</h1>
            <button 
           className="search-btn"
           onClick={(e) =>{
            const data =  filterData(searchText, restaurants);
            setRestaurants(data);
        }}> Search</button>
         </div>
         <div className="restraunt-list">
          {restaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} />;
           })}
        </div>
        </>
    );
};

export default Body; 