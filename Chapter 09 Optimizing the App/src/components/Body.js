import { RestaurantList } from "../../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../customHooks/useOnline";
import UserContext from "../../utils/UserContext";
// const filterData = (searchTxt,restaurants) => {
//     restaurants.filter((restaurant) => 
//      restaurant?.data?.name.includes(searchTxt))
// }

// const RestaurantList = () => {
//     const [searchTxt, setSearchTxt] = useState("");
//     const allRestaurant = useRestaurantList([]);
//     const filteredData = allRestaurant?.filter((eachItem)) =>
//     eachItem?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase))
//     );
 /// The above code should be in your body component
//if you write it outside it will throw an error /*/

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchTxt,setSearchTxt] = useState("");
    const {user,setUser} = useContext(UserContext);
    // const [searchClicked,setSearchClicked] = useState("false");
    


    useEffect(() => {
      //BEST PLACE TO MAKE API CALL
      getRestaurants();
    }, []);
    
    async function getRestaurants() {
      const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      console.log("render");
    }

    // const  isOnline = useOnline();
    // if(!isOnline){
    //   return <h1>Offline..🚩🔴🚩..Please check your Internet Connection!!!</h1>;
    // } 




     //when i dont have restaurant dont render anything
    if(!allRestaurants) return null; //This is early return
     
    // if(filteredRestaurants.length === 0)
    //  return <h1>No restaurant match your filter!!</h1>;
           //Conditional rendering
          //TErnary operator
    return allRestaurants.length === 0 ? (
      <Shimmer/>
      ) : (
      <> 
        <div className="search-container p-5 bg-pink-50 my-5">
          <input 
          type="text"
          className="search-input focus:bg-yellow-200 p-2 m-2"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
        }}
        />
        {/* <h1>{searchClicked}</h1> */}
          <button 
          className="search-btn p-2 m-2 bg-purple-900 hover:bg-green-500 text-white rounded-md"
          onClick={() => {
        //     if(searchClicked === "true") {
        //     setSearchClicked("false");  
        // }else {
        //     setSearchClicked("true");
        // }
         
        
        // need to filter the data
        const data =  filterData(searchTxt, allRestaurants);
        //update the state - restaurants
         setFilteredRestaurants(data);
         
        }}>
            Search</button>
            <input value={user.name} onChange={
              e => setUser({
                ...user,
                name: e.target.value,
              })
            }>
          </input>
          <input value={user.email} onChange={
            e => setUser({
              ...user,
              email: "newemail@gmail.com",
            })
          }></input>
        </div>

        <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) =>{
            return(
               <Link 
               to={"/restaurant/" + restaurant.data.id} 
               key={restaurant.data.id}>
                 <RestaurantCard{...restaurant.data} user={user}/>
                 </Link>);            
        })}
        
        </div>
        </>
    );
};

export default Body;