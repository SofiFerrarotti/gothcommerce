import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.img} alt={item.name} />
      <p>${item.price}</p>
    </div>
  );
};

export default ItemDetail;
