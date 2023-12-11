import { FETCH_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{

  const [listOfRestaurants, setListOfRestaurats] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("component rendered");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_API_URL);
    const json = await data.json();

    //optional chaining
    const  restaurantData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurats(restaurantData);
    setFilterRes(restaurantData);
  };

    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" placeholder="Type your search" value={searchText} 
            onChange={(e)=>{setSearchText(e.target.value);}}></input>
            <button className="btn" onClick={()=>{
              const filterRes=listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilterRes(filterRes);
            }}>Search</button>
          </div>
          <button className="btn" onClick={()=>{
            const filteredList=listOfRestaurants.filter(
              (rest)=> rest.info.avgRating > 4
            );
            setFilterRes(filteredList);
          }} >Top Rated Restaurants</button>
        </div>
        <div className="res-container"> 
          {filterRes.map((restaurant) => 
            (<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>))}
        </div>
      </div>
    )
  }

  export default Body;