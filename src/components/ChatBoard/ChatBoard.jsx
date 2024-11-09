import React from 'react';
import './ChatBoard.css';

const ChatBoard = ({ selectedCoffee, quantity, setQuantity }) => {
  return (
    <div className="chat-board">
      <h2 className="chat-board-title">Chat Board</h2>
      {selectedCoffee ? (
        <div className="chat-message">
          <p>
            <strong>You:</strong> I'd like to order{' '}
            <span>
              <select 
                className="quantity-selector" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </span>{' '}
            cup(s) of <span>{selectedCoffee}</span>.
          </p>
          <p>
            <strong>ChatBot:</strong> Great choice! You've ordered{' '}
            <span>{quantity}</span> cup(s) of <span>{selectedCoffee}</span>.
          </p>
        </div>
      ) : (
        <p className="chat-placeholder">Please select a coffee to continue.</p>
      )}
    </div>
  );
};

export default ChatBoard;
