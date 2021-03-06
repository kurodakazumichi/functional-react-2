import React from 'react';

import './ShoppingItem.css';

function ShoppingItem({product, onRemoveClick}) {
  return (
    <div className="shopping-cart-item">
        <div>{product.name}</div>
        <div>{product.quantity}</div>
        <div>
          <button 
            type="button" 
            onClick={() => onRemoveClick(product)}>
              Remove
          </button>
        </div>
    </div>
  );
}

export default ShoppingItem;