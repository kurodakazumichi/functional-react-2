import React, {useState, useEffect} from 'react';

import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

import './App.css';

function App({products, shoppingCartStore}) {
  const [cart, setCart] = useState({list: []});

  useEffect(subscribeToStore, []);

  function subscribeToStore() {
    shoppingCartStore.onChange(reload);

    return function cleanup(){
      shoppingCartStore.offChange();
    };
  }

  function reload() {
    const cart = shoppingCartStore.get();
    setCart(cart);
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList 
          products={products} 
          onAddClick={shoppingCartStore.addToCart} />

        <ShoppingCart 
          cart={cart}
          onRemoveClick={shoppingCartStore.removeFromCart} />
      </div>
    </div>
  );
}

export default App;
