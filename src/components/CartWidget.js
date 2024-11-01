import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartWidget.css';

const CartWidget = ({ onCheckoutOpen }) => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="cart-widget" onClick={onCheckoutOpen}>
      <span>🛒</span>
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
};

export default CartWidget;