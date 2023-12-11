import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { MENU_API_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const menuData= await fetch(MENU_API_URL + resId);
        const menuJson= await menuData.json();
        console.log(menuJson);
        setResInfo(menuJson.data);
    };

    if (resInfo === null) return <Shimmer />;
    
    const { name, avgRating, city, cuisines, costForTwoMessage } = 
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
        <p><b>City:</b> {city}</p>
        <p><b>Rating:</b> {avgRating} stars</p>
        <h3>MENU</h3>
        <ul>
            {itemCards.map((item)=>
            <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            )}
        </ul>
    </div>
    );
}

export default RestaurantMenu;