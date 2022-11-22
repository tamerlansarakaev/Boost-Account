// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Inteface List
import { ISiteState } from '../CartPage';

// Styles
import './CartItem.less';

const CartItem: React.FC<ISiteState> = (props) => {
  const [options] = React.useState(['Finish Storyline']);
  return (
    <div className="cart-product">
      <div className="cart-product-background">
        <img alt="background" src={props.image} />
      </div>
      <div className="info">
        <div className="info-block">
          <div className="info-header">
            <p className="info-title">Boost</p>
            <p className="info-product-title">Heloo</p>
          </div>
          <div className="info-options">
            <p className="options-title">Options</p>
            {options &&
              options.map((option) => {
                return (
                  <div className="options-box">
                    <span className="option-name">{option}</span>
                    <span className="option-price">€ 7</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="cart-product-delete">
          <ReactSVG
            className="delete-icon"
            src={require('../../../UI/icons/deleteIcon.svg').default}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
