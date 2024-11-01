import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de esta línea
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tienda de Ropa</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
      <div className="cart-icon">
        <span>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;