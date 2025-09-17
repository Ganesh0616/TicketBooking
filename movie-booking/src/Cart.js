import React from 'react';
import { Button } from 'antd';
import './Cart.css'; // ✅ Import the CSS file

function Cart({ cart, setCart }) {
  const handleIncrease = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">No items in the cart</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.name}</h3>
              <p className="cart-item-price">Price: ₹{item.ticketprice}</p>
              <p className="cart-item-price">Quantity: {item.quantity}</p>
              <div className="cart-buttons">
                <p style={{ color: '#00ff9f' }}>
                ₹{item.ticketprice} × {item.quantity} = ₹{item.ticketprice * item.quantity}
              </p>
                <Button onClick={() => handleIncrease(item.id)}>+</Button>
                <Button onClick={() => handleDecrease(item.id)}>-</Button>
                <Button danger onClick={() => handleRemove(item.id)}>Remove</Button>
              </div>
            </div>
          </div>
        ))
      )}
      
    </div>
  );
}

export default Cart;
