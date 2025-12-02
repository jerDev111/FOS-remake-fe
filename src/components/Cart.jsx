import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  // Mock items (always shown)
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Chicken Adobo",
      description: "Classic Filipino dish with vinegar & soy sauce",
      price: 120,
      qty: 1,
      image: "/images/adobo.jpg",
    },
    {
      id: 2,
      name: "Pancit Canton",
      description: "Stir-fried noodles with veggies & meat",
      price: 95,
      qty: 2,
      image: "/images/canton.jpg",
    },
  ]);

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
    );
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = cart.length > 0 ? 49 : 0;
  const total = subtotal + delivery;

  return (
    <div className="cart">

      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt="" className="cart-image" />

            <div className="cart-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>

              <div className="cart-qty">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <p className="cart-price">₱{(item.price * item.qty).toFixed(2)}</p>

              <button className="cart-remove" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <>
          <div className="cart-summary">
            <div className="cart-summary-line">
              <span>Subtotal:</span>
              <span>₱{subtotal.toFixed(2)}</span>
            </div>

            <div className="cart-summary-line">
              <span>Delivery:</span>
              <span>₱{delivery.toFixed(2)}</span>
            </div>

            <div className="cart-summary-total">
              <span>Total:</span>
              <span>₱{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-btn-group">
            <button className="cart-button">Checkout</button>
            <button className="cart-button" onClick={clearCart}>Clear</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
