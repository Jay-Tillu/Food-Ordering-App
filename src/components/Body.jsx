import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

function Body() {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.avgRatingString > 4.0
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
