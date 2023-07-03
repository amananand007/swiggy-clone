import { IMG_CDN_URL } from "../constants";
import "./RestaurantCard.css";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-60 p-2 m-2 shadow-lg h-72">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2 className="font-bold text xl">{name}</h2>
      <h3 className="text-sm overflow-hidden">{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
