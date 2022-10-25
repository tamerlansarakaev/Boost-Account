// Global
import React from 'react';

// Components

// UI
import CartIcon from '../../../UI/icons/basket.svg';

// Styles
import "./Cart.less"

function Cart () {
  return (
    <div className='Cart'>
      <img src={CartIcon} alt="Add to Cart" className='cart-icon'/>
    </div>
  )
}

export default Cart