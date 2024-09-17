import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

function Body() {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">
            Top Rated Restaurant            
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
