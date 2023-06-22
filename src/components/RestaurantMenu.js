import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_API } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="Menu">
      <div>
        <h1>Hi</h1>
        <h1>{name}</h1>
        <h1>{costForTwo}</h1>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs"} - {item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
