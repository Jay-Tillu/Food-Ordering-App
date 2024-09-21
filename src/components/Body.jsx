import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

function Body() {
  // useState gives us back Array. And we destructure it on the fly.
  // This code and original useState code that we use is same.
  // const array = useState(resList);
  // const listOfRestaurant = array[0];
  // const setListOfRestaurant = array[1];

  // Why we need the second setState function?
  // Because React needs some trigger, so that it can start the Diff Algorithm.
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  // useEffect always called as soon as component renders.
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.292604&lng=73.226315&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

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
          // console.log(restaurant.info.id)
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
