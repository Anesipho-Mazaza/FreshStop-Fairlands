import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const [customer, setCustomer] = useState({ name: '', phone: '' });

  const total = cart.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, qty) => {
    const quantity = Math.max(1, Number(qty)); // minimum 1
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${customer.name}! Your order totaling R${total.toFixed(2)} has been placed.`);
    dispatch({ type: 'CLEAR_CART' });
    setCustomer({ name: '', phone: '' });
  };

  if (cart.cartItems.length === 0)
    return <p className="p-4 text-center">Your cart is empty. Please add items first.</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <ul className="mb-4">
        {cart.cartItems.map((item) => (
          <li key={item.id} className="flex items-center justify-between mb-2">
            <div>
              {item.name} (R{item.price.toFixed(2)}) x
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="w-16 mx-2 border rounded p-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>R{(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 font-bold"
                aria-label={`Remove ${item.name}`}
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-lg font-semibold mb-4">Total: R{total.toFixed(2)}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="border rounded p-2"
        />
        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
