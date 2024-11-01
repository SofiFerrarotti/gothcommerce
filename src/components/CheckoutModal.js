// src/components/CheckoutModal.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && address) {
      setMessage('Compra finalizada con éxito. ¡Gracias por tu compra!');
      clearCart(); 

      setTimeout(onClose, 2000);
    } else {
      setMessage('Por favor, completa todos los campos.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Checkout</h2>
        {cart.length === 0 ? (
          <p>{message || 'No hay productos en el carrito.'}</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Nombre" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="Dirección" />
              <button type="submit">Finalizar Compra</button>
            </form>
            {message && <p>{message}</p>}
          </>
        )}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
