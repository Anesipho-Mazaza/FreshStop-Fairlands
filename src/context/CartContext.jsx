import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const exist = state.cartItems.find(item => item.id === action.item.id);
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.item, quantity: 1 }],
        };
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.id),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item
        ),
      };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
