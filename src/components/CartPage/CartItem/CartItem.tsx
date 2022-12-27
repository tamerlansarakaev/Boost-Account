// Global
import React from 'react';
import { ReactSVG } from 'react-svg';
import { ICartItem } from '../CartList/CartList';
// Inteface List

// Styles
import './CartItem.less';

const CartItem: React.FC<ICartItem> = ({ onDelete, id, ...props }) => {
  const [options] = React.useState(['Finish Storyline']);
  function findFinalCurrency(fiat: string) {
    if (fiat.toLowerCase() === 'EUR'.toLowerCase()) {
      return '€';
    } else if (fiat.toLowerCase() === 'USD'.toLowerCase()) {
      return '$';
    } else {
      return '';
    }
  }
  return (
    <div className="cart-product">
      <div className="cart-product-background">
        <img alt="background" src={props.image} />
      </div>
      <div className="info">
        <div className="info-block">
          <div className="info-header">
            <p className="info-title">Boost</p>
            <p className="info-product-title">{props.ProductTitle}</p>
          </div>
          <div className="info-options">
            <p className="options-title">Options</p>
            {options &&
              options.map((option, i) => {
                return (
                  <div className="options-box" key={i}>
                    <span className="option-name">{option}</span>
                    <span className="option-price">
                      {findFinalCurrency(props.currency)}{' '}
                      {props.salePrice || props.price}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
        <button
          className="cart-product-delete"
          onClick={() => {
            onDelete(id);
          }}
        >
          <ReactSVG
            className="delete-icon"
            src={require('../../../UI/icons/deleteIcon.svg').default}
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
