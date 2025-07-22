import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p>Your order number is:</p>
      <p className="text-xl font-semibold mb-6">{orderId}</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirmation;
