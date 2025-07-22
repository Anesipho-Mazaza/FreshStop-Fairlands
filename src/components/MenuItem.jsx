import React from 'react';

const MenuItem = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>R{price}</p>
    </div>
  );
};

export default MenuItem;