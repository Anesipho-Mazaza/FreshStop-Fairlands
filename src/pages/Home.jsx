import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to FreshStop Home!</h1>
    <nav>
      <Link to="/menu">Menu</Link> | <Link to="/checkout">Checkout</Link>
    </nav>
  </div>
);

export default Home;
