import restaurantList from "../Constants"

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
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
  
        <h2>{name}</h2>
  
        <h3>{cuisines.join(", ")}</h3>
  
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  
  // BODY
  const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    );
  };

 export default Body;
  