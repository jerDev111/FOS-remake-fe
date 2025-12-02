import React, { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

const mockProduct = {
  id: 1437,
  name: "Big Mac Meal",
  basePrice: 250, // just example
  imageUrl: "https://via.placeholder.com/300x200", // replace with real
  description: "Two beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun"
};

const mockAddons = [
  { id: 1, name: "Extra Cheese", price: 30 },
  { id: 2, name: "Bacon Bits", price: 40 },
  { id: 3, name: "Mushrooms", price: 25 },
];

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const [addons, setAddons] = useState(
    mockAddons.map(addon => ({ ...addon, quantity: 0 }))
  );

  const increaseProduct = () => setQuantity(q => q + 1);
  const decreaseProduct = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const increaseAddon = (id) => {
    setAddons(prev =>
      prev.map(a => (a.id === id ? { ...a, quantity: a.quantity + 1 } : a))
    );
  };
  const decreaseAddon = (id) => {
    setAddons(prev =>
      prev.map(a =>
        a.id === id ? { ...a, quantity: Math.max(0, a.quantity - 1) } : a
      )
    );
  };

  // calculate total
  const addonsTotal = addons.reduce(
    (sum, a) => sum + a.price * a.quantity,
    0
  );
  const productTotal = mockProduct.basePrice * quantity;
  const total = productTotal + addonsTotal;

  return (
    <div className="checkout">
      <div className="product-detail">
        <img
          className="product-image"
          src={mockProduct.imageUrl}
          alt={mockProduct.name}
        />
        <div className="product-info">
          <h2>{mockProduct.name}</h2>
          <p>{mockProduct.description}</p>
          <div className="product-qty">
            <button onClick={decreaseProduct}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseProduct}>+</button>
          </div>
          <div className="product-price">
            ₱{mockProduct.basePrice} × {quantity} = ₱{productTotal}
          </div>
        </div>
      </div>

      <div className="addons-section">
        <h3>Add‑ons</h3>
        {addons.map(addon => (
          <div key={addon.id} className="addon-item">
            <div className="addon-info">
              <span>{addon.name}</span>
              <span>₱{addon.price}</span>
            </div>
            <div className="addon-qty">
              <button onClick={() => decreaseAddon(addon.id)}>-</button>
              <span>{addon.quantity}</span>
              <button onClick={() => increaseAddon(addon.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-line">
          <span>Base:</span>
          <span>₱{productTotal}</span>
        </div>
        <div className="summary-line">
          <span>Add‑ons:</span>
          <span>₱{addonsTotal}</span>
        </div>
        <div className="summary-total">
          <strong>Total:</strong>
          <strong>₱{total}</strong>
        </div>
      </div>
     <div class="checkout-btn-group">
      <Link to="/Cart"></Link><button className="checkout-button">Add to Cart</button> <Link/>
           <button className="checkout-button">Proceed to Pay</button>

     </div>

    </div>
  );
};

export default Checkout;
