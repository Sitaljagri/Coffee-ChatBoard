import React from 'react';
import './CoffeeMenu.css';

const CoffeeMenu = ({ setSelectedCoffee }) => {
  const coffeeOptions = [
    { name: 'Espresso', price: 2.5 },
    { name: 'Cappuccino', price: 3.0 },
    { name: 'Latte', price: 3.5 },
    { name: 'Mocha', price: 4.0 }
  ];

  return (
    <div className="coffee-menu">
      <h2 className="coffee-menu-title">Select Your Coffee</h2>
      <ul className="coffee-options-list">
        {coffeeOptions.map((coffee, index) => (
          <li
            key={index}
            className="coffee-option-item"
            onClick={() => setSelectedCoffee(coffee.name)}
          >
            <span className="coffee-name">{coffee.name}</span>
            <span className="coffee-price">${coffee.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeMenu;
