// import restaurantList from "../config";
// import RestaurantCard from "./RestaurantCard";

// const Body = () => {
//     let searchTxt = "KFC"; //let/const doesn't matter.. React use one way data binding
//     return (
//         <>
//         <div className="search-container">
//             <input type= "text" 
//             className="search-input" 
//             placeholder="Search"
//             value= {searchTxt} 
//             onChange= { (e) => onChangeInput("dimple")} or console.log("e.target.value")
//             />

//             <button className="search-btn">Search</button>

//             </div>
            
//         <div className="restraunt-list">
//         {restaurantList.map((restaurant) => {
//           return 
//           (<RestaurantCard {... restaurant.data} />);
//         })}
//     </div>
//     </>
//     );
// };

// export default Body;



import restaurantList from "../config";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";



function filterData(searchText, restaurants) {

 const filterData =   restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchText)
    );
    return filterData;
}
// Whenever u create a variable , react gives u a variable and a method to use it.
const Body = () =>{ //we use local var here , for below 
    const [restaurants, setRestaurants] = useState(restaurantList);
    // here created a local var restaurants and give a default value restaurantList.. So, we can use (restaurants.) in map function and replace 
    //{restaurantList.map((restaurant) with {restaurants.map((restaurant)
    // const searchTxt = "KFC"; //assume this is how u create varaible in js
    // below is how u create local state var in react
    // const [searchText] = useState("KFC"); //we give the default value like this
    const [searchText, setSearchText] = useState(); //we give the default value like this
//if var name is searchInput then const[searchInput, setSearchInput]    
// now do we use setSearchInput function  //Always use state variables
// above can also be written as for simplication const searchvar = useState(); const[searchText, setSearchText]= searchvar;
// const searchClicked = false; //boolean are not printed
// const [searchClicked, setSearchClicked] = useState("false");
const [searchClicked, setSearchClicked] = useState("");
return (
        <>
        <div className="search-container">
            <input type= "text" 
            className="search-input" 
            placeholder="Search"
            // value= {searchText} now this is replaced with
            value={searchText} 
            // when we did onchange we're modifying searchTxt like this with e.target.value
// But in react u cant directly modify ur variable like this. We can only modify ur variable only using a  function
//From where we'll get that function?? The useState gives that function... and we call that function as set followed by our name of variable in CamelCase i.e setSearchText          
            // onChange= {(e) => {
                // searchText = e.target.value;
                //e.target.value == whaatever u write in input. Whatever u write in input is put in searchInput
            //     setSearchInput(e.target.value);
            // }}
// from this event function(e) , we can read whatever u type in search bar
//this e.target.value contains whatever we typing in
            onChange = {(e) => {
               setSearchText(e.target.value); //we'll update searchText with e.target.value. So, for that we'll do setSearchText  and this  setSearchText(e.target.value) wil modify searchText var
            }}
            />
            <h1>{searchClicked}</h1>
{ /* To see whatever we writing if updating in local var or not .. we console.log or use {searchInput} and can check in our webpage */}/
            {/* <button className="search-btn">Search - {searchText} </button> */}
            {/*} <button className="search-btn" onClick={() => { setSearchClicked("true")*/}
           <button 
           className="search-btn" 
        //    onClick={() =>{
        //     if (searchClicked === "true") {
        //      setSearchClicked("false");
        //      } else {
        //     setSearchClicked("true");
        //    } 
           // this is toggle when we click search true and false alters
           onClick={(e) =>{
            //need to filter data
            const data =  filterData(searchText, restaurants);
    //update the state i.e restaurants var
    setRestaurants(data);
                //we write onclick here, we want to get true when we press search, For that we used this (onclick takes a function)
                //function and we dont need e(event) bz we dont want to read the value 
            }}>Search</button>
            
            </div>

            
        <div className="restraunt-list">
          {restaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} />;
           })}
        </div>
        </>
    );
    // we cant update this restaurantList directly.. we'll to make a state var from this.To maintain list of restaurants we'll make a state var
        };
export default Body; 


