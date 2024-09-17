import logo from "./assets/logo.png";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant Card
const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="Food Image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

const resList = [
  {
    id: "758948",
    name: "Olio - The Wood Fired Pizzeria",
    cloudinaryImageId: "7e651e00dbf998af59ae7c5e3296c982",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
    avgRatingString: "4.4",
    sla: {
      slaString: "30-35 mins",
    },
  },
  {
    id: "758949",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "ku9oeqqz6lbjjmz8bpfz",
    costForTwo: "₹301 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRatingString: "4.2",
    sla: {
      slaString: "20-30 mins",
    },
  },
  {
    id: "75829",
    name: "The Dessert Heaven - Pastry, Brownie and Cakes",
    cloudinaryImageId: "d20fdc8c86aa8bd0638f47dd013d46f9",
    costForTwo: "₹302 for two",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRatingString: "3.2",
    sla: {
      slaString: "25-30 mins",
    },
  },
  {
    id: "7529",
    name: "Cheesecakes By CakeZone",
    cloudinaryImageId: "c77fe42b7997c566f491e84b540701ca",
    costForTwo: "₹306 for two",
    cuisines: [
      "Bakery",
      "Desserts",
      "Beverages",
      "Ice Cream",
      "Sweets",
      "Juices",
      "Bengali",
    ],
    avgRatingString: "3.1",
    sla: {
      slaString: "10-20 mins",
    },
  },
  {
    id: "75819",
    name: "Santushti Shakes & More",
    cloudinaryImageId: "rnmxhamghcyf72iztqyq",
    costForTwo: "₹250 for two",
    cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
    avgRatingString: "3.1",
    sla: {
      slaString: "14-20 mins",
    },
  },
];

// Body Component
const Body = () => {
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
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default App;
