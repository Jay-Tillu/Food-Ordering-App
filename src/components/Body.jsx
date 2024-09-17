import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
