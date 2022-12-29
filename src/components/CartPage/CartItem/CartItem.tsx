// Global
import React from 'react';
import { ReactSVG } from 'react-svg';
import { ICartItem } from '../CartList/CartList';
// Inteface List

// Styles
import './CartItem.less';

const CartItem: React.FC<ICartItem> = ({ onDelete, options, id, ...props }) => {
  const conditionOptions = options.length > 2;
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
            <div className="options">
              {options &&
                options
                  .filter((_, i) => i < 2)
                  .map((option, i) => {
                    return (
                      <div className="options-box" key={i}>
                        <span className="option-name">{option}</span>
                        <span className="option-price">Free</span>
                      </div>
                    );
                  })}
            </div>
            {options && conditionOptions ? (
              <p className="options-other">Other options</p>
            ) : (
              ''
            )}
          </div>
          <div className="info-price">
            <h4>Total</h4>
            <p>
              {findFinalCurrency(props.currency)}{' '}
              {props.salePrice || props.price}
            </p>
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
