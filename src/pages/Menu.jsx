import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import your cart context

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart(); // Access dispatch to add items

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(res => res.json())
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch menu:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading menu...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">FreshStop Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white shadow rounded p-4 text-center">
            <img
              src={`https://source.unsplash.com/featured/?${item.name}`}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600 mb-2">R{item.price.toFixed(2)}</p>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => dispatch({ type: 'ADD_ITEM', item })}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link to="/checkout" className="text-blue-600 hover:underline font-medium">
          Go to Checkout →
        </Link>
        <br />
        <Link to="/" className="text-sm text-gray-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Menu;
