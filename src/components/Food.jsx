import React, { useState } from "react";
import "./Food.css"; // keep your styling here
import { Link } from "react-router-dom";

const Food = () => {
  // Food data with images
  const foodItems = [
    { id: 1, name: "Big Mac", category: "Burgers", price: 150, image: "/images/bigmac.jpg" },
    { id: 2, name: "Cheeseburger", category: "Burgers", price: 99, image: "/images/cheeseburger.jpg" },
    { id: 3, name: "McChicken", category: "Chicken", price: 120, image: "/images/mcchicken.jpg" },
    { id: 4, name: "Chicken McDo", category: "Chicken", price: 140, image: "/images/chickenmcdo.jpg" },
    { id: 5, name: "Coke", category: "Drinks", price: 45, image: "/images/coke.jpg" },
    { id: 6, name: "Iced Tea", category: "Drinks", price: 55, image: "/images/icedtea.jpg" },
  ];

  const categories = ["All", "Burgers", "Chicken", "Drinks"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredFood = foodItems.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="food-page">
      <button onClick={() => window.history.back()} className="back-btn">← Back</button>

      {/* Search Bar */}
      <input
        type="text"
        className="food-search"
        placeholder="Search food..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Categories */}
      <div className="food-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Listing */}
      <div className="food-list">
        {filteredFood.map((food) => (
          <div className="food-card2" key={food.id}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.category}</p>
            <p>₱{food.price}</p>
            <Link to="/Checkout">
              <button className="fc-button">Order</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
