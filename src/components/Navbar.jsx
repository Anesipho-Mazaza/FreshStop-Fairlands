import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">FreshStop</Link>
      <Link to="/checkout" className="relative">
        Cart
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-600 rounded-full px-2 text-xs font-bold">
            {itemCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
