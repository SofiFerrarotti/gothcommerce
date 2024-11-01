import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setItems([
        { id: 1, name: 'Camisa', price: 25, img: require('../assets/camisa.jpg') },
        { id: 2, name: 'Pantalón', price: 40, img: require('../assets/pantalon.jpg') },
        { id: 3, name: 'Vestido', price: 50, img: require('../assets/vestido.jpg') },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <h2>Cargando...</h2>;

  return <ItemList items={items} />;
};

export default ItemListContainer;
