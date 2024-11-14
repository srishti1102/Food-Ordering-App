import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import reslist from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body=()=>{
    //Local state Variable - Super powerful Variable
    const [ListOfRestaurants ,setListRestaurants] =useState(reslist);

    //6 chapter
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData= async( )=>{
        const data= await fetch(
            "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json =await data.json();
        console.log(json);
        setListRestaurants(json?.data?.cards[1]?.data?.data?.cards);
    };


    //Conditional Rendering
    if(ListOfRestaurants.length==0){
        return <Shimmer/>;
    }
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