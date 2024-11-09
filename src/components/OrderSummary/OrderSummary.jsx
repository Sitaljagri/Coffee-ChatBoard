// src/components/OrderSummary/OrderSummary.jsx
import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ selectedCoffee, quantity, totalPrice }) => {
  return (
    <div className="order-summary">
      <h2 className="order-summary-title">Order Summary</h2>
      {selectedCoffee ? (
        <div className="order-details">
          <p className="order-item"><strong>Coffee:</strong> {selectedCoffee}</p>
          <p className="order-item"><strong>Quantity:</strong> {quantity}</p>
          <p className="order-total"><strong>Total Price:</strong> ${totalPrice}</p>
        </div>
      ) : (
        <p className="order-message">No coffee selected yet.</p>
      )}
    </div>
  );
};

export default OrderSummary;
