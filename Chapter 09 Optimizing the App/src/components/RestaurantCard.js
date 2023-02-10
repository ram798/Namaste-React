import { IMG_CDN_URL } from "../../config";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const RestaurantCard = ({name,
    cuisines,
    cloudinaryImageId,
    costForTwoString,
    }) => {
        const {user} = useContext(UserContext);
    // console.log(props);
    return(
        
    <div className="w-[250px] p-5 m-5 shadow-lg bg-pink-50">
    <img src={IMG_CDN_URL +
    cloudinaryImageId}/>
    <h2 className=" font-bold text-xl "> {name}</h2>
    <h3 className=" w-64"> {cuisines .join(",")}</h3>
    <h4> {costForTwoString}</h4>
    <h5 className="font-bold">{user.email}</h5>
    </div>
    
); 
};

export default RestaurantCard;