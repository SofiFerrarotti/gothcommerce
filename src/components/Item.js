
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Item.css';

const Item = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} className="item-image" />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => addToCart(item)}>Agregar al Carrito</button>
    </div>
  );
};

export default Item;
