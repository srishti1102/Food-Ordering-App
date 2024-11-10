import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="header">
            <div>
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"/>
            </div>
            <div className="nav-items">
              <ul>
                <li> Home</li>
                <li> About Us</li>
                <li> Contact Us</li>
                <li>Cart</li>
              </ul>
            </div>
        </div>
    );
};



const RestaurantCard =() =>{
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}> 
        <img 
           className="res-logo"
           alt="res-logo"
           src=" https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
        <h3> Meghna Foods</h3>
        <h4> Biryani, North Indian, Asian</h4>
        <h4>4.4 stars</h4>
        <h4> 38 min</h4>
        </div>
    );
};

const Body =()=>{
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container"> 
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
};

 const AppLayout=()=>{
    return(
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
 }
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
