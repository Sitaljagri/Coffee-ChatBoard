import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Coffee Chat Board</h2>
      <p>
        Welcome to Coffee Chat Board! Here you can explore different types of coffee, customize your order,
        and enjoy a seamless coffee ordering experience. Whether you're looking for a strong espresso or a
        creamy latte, we've got it all. Select your favorite coffee, choose the quantity, and submit your order.
        You can also track your order history and provide feedback.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>Select from various coffee types</li>
        <li>Customize your order with quantity and preferences</li>
        <li>View order history and reorder</li>
        <li>Give feedback on your coffee</li>
      </ul>
    </div>
  );
};

export default About;
