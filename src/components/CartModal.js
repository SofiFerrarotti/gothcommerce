// src/components/CartModal.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartModal.css'; 
const CartModal = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert('Procediendo al checkout...');
    clearCart(); 
    onClose(); 
  };

  if (!isOpen) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Carrito</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt={item.name} className="cart-item-image" />
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <button onClick={handleCheckout}>Finalizar Compra</button>
          </>
        )}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default CartModal;
