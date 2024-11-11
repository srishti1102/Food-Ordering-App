import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import reslist from "../utils/mockData";

const Body=()=>{
    //Local state Variable - Super powerful Variable
    const [ListOfRestaurants ,setListRestaurants] =useState(reslist);
    


    return(
        <div className="body">
            <div className="filter">
                <button
                className="filter-btn"
                onClick={()=>{
                    // Filter logic here
                    const filteredList =ListOfRestaurants.filter(
                        (res)=>res.info.avgRating >4);
                    setListRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
                </div>
            <div className="res-container">
              {ListOfRestaurants.map((Restaurant)=>(
                <RestaurantCard resData={Restaurant}/>
              ))}
            </div>
        </div>
    );
};
export default Body;