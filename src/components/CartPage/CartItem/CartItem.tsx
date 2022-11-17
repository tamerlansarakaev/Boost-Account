// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Inteface List
import { ISiteState } from '../CartPage';

// Styles
import './CartItem.less';

const CartItem: React.FC<ISiteState> = (props) => {
  return (
    <div className="cart-product">
      <div className="cart-product-background">
        <img alt="background" src={props.image} />
      </div>
      <div className="info">
        <div className="info-header">
          <p className="info-title">Boost</p>
          <div className="cart-product-delete">
            <ReactSVG
              className="delete-icon"
              src={require('../../../UI/icons/deleteIcon.svg').default}
            />
          </div>
        </div>
          <p>Heloo</p>
      </div>
    </div>
  );
};

export default CartItem;
