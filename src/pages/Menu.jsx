import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading menu...</p>;

  return (
    <div>
      <h1>Menu Page</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            {item.name} - R{item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Menu;
