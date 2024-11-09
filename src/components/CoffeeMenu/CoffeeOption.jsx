// src/components/CoffeeMenu/CoffeeOption.jsx
import React from 'react';

const CoffeeOption = ({ coffee, setSelectedCoffee }) => (
  <li>
    <button onClick={() => setSelectedCoffee(coffee)}>{coffee}</button>
  </li>
);

export default CoffeeOption;