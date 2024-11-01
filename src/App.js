import React, { useState } from 'react';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import CheckoutModal from './components/CheckoutModal';

const App = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div>
      <CartWidget onCheckoutOpen={() => setIsCheckoutOpen(true)} />
      <ItemListContainer />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
};

export default App;
