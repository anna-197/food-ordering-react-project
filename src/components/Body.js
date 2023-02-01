import restaurantList from "../Constants"
import { useState } from "react";

//  RESTAURANT CARD
const RestaurantCard = ({
    name,
  
    cuisines,
  
    cloudinaryImageId,
  
    lastMileTravelString,
  }) => {
    return (
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"  
            + cloudinaryImageId
          }
        />
  
        <h2>{name}</h2>
  
        <h3>{cuisines.join(", ")}</h3>
  
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };

//   FILTER DATA FUNCTION

  function filterData(searchText, restaurantList) {

     const filterData = restaurantList.filter((restaurant) =>
    
        restaurant.data.name.includes(searchText)
    
      );
    
    
      return filterData;
    
    }
  
  // BODY
  const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
      <>
        {/* SEARCH BAR */}


        <div className="search-container">

            <input

            type="text"

            className="search-input"

            placeholder="Search"

           value={searchText}

           onChange={(e) => {

          setSearchText(e.target.value);

         }}

            />

       <button

         className="search-btn"

          onClick={() => {

            //need to filter the data

            const data = filterData(searchText, restaurantList);

            // update the state - restaurants

            setRestaurants(data);


          }}

        >

          Search

        </button>

        </div>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      </>
    );
  };

  

 export default Body;
  