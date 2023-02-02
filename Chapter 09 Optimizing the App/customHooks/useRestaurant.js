import { useEffect ,useState } from "react";
import { FETCH_URL } from "../config";

const useRestaurant = (id) => {
const[restaurant, setRestaurant] = useState(null);

//get resdata from API
useEffect(() => {
    getRestaurantInfo();
},[]);

async function getRestaurantInfo(){
    const data = await fetch (FETCH_URL + id);
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
}


 return restaurant;
    //return restaurant data
};

export default useRestaurant;