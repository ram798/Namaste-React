import { IMG_CDN_URL } from "../../config";

const RestaurantCard = ({name,cuisines,cloudinaryImageId,costForTwoString}) => {
    // console.log(props);
    return(
        <>
    <div className="w-[200px] p-5 m-5 shadow-lg bg-pink-50">
    <img src={IMG_CDN_URL +
    cloudinaryImageId}/>
    <h2 className="font-bold text-xl"> {name}</h2>
    <h3> {cuisines .join(",")}</h3>
    <h4> {costForTwoString}</h4>
    </div>
    </>
); 
};

export default RestaurantCard;