import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ item }) => {
  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
