// import React, { useState } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import CoffeeMenu from './components/CoffeeMenu/CoffeeMenu';
// import ChatBoard from './components/ChatBoard/ChatBoard';
// import OrderSummary from './components/OrderSummary/OrderSummary';
// import './App.css';

// const App = () => {
//   const [selectedCoffee, setSelectedCoffee] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="app">
//       <Navbar />
//       <div className="content">
//         <h1>Hello, Coffee Chat Board!</h1>
//         <CoffeeMenu setSelectedCoffee={setSelectedCoffee} />
//         <ChatBoard selectedCoffee={selectedCoffee} setQuantity={setQuantity} />
//         <OrderSummary selectedCoffee={selectedCoffee} quantity={quantity} />
//       </div>
//     </div>
//   );
// };

// export default App;

// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import CoffeeMenu from './components/CoffeeMenu/CoffeeMenu';
import ChatBoard from './components/ChatBoard/ChatBoard';
import OrderSummary from './components/OrderSummary/OrderSummary';

const App = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Navbar />
      <h1>Hello, Coffee Chat Board!</h1>
      <CoffeeMenu setSelectedCoffee={setSelectedCoffee} />
      <ChatBoard 
        selectedCoffee={selectedCoffee} 
        quantity={quantity} 
        setQuantity={setQuantity} 
      />
      <OrderSummary selectedCoffee={selectedCoffee} quantity={quantity} />
    </div>
  );
};

export default App;
