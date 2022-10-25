// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Components
import ProductMainElement from './ProductMainElement/ProductMainElement';
import Button from '../../UI/Button/Button';

// Styles
import './ProductItem.less';

// UI
import DateIcon from '../../../UI/icons/timePublicate.svg';
import classNames from 'classnames';

function ProductItem({
  ProductTitle,
  price,
  currency,
  options,
  status,
  salePrice,
  ...props
}) {
  const [redBG, setRedBG] = React.useState(false);
  const [whiteBlackBG, setWhiteBlackBG] = React.useState(false);
  const [greenBG, setGreenBG] = React.useState(false);
  const [standartBG, setStandartBG] = React.useState(false);
  const className = classNames({
    productStatus: true,
    whiteBlackBG,
    redBG,
    greenBG,
    standartBG,
  });
  function getSale() {
    if (salePrice) {
      return (
        <div>
          <span
            className="product-price-title"
            style={{ color: '#FF5C54' }}
          >{`${findFinalCurrency(currency)} ${salePrice}`}</span>
          <p
            style={{
              color: '#fff',
              fontSize: '18px',
              textDecoration: 'line-through',
            }}
          >
            {findFinalCurrency(currency)} {price}
          </p>
        </div>
      );
    }
  }

  function findFinalCurrency(fiat) {
    if (fiat.toLowerCase() === 'EUR'.toLowerCase()) {
      return '€';
    } else if (fiat.toLowerCase() === 'USD'.toLowerCase()) {
      return '$';
    } else {
      return '';
    }
  }

  function confirmRequest() {
    const outofStock = 'Out of stock';
    const sale = 'SALE';
    const hot = 'HOT';
    if (status === outofStock) {
      return 'ShoppingBag';
    } else if (status === sale) {
      return 'sale';
    } else if (status === hot) {
      return 'FireIcon';
    }
  }

  React.useEffect(() => {
    if (status) {
      confirmRequest();
    }
  }, [status]);

  React.useEffect(() => {
    findFinalCurrency(currency);
  }, [currency]);

  React.useEffect(() => {
    switch (status) {
      case 'HOT':
        setRedBG(true);
        break;
      case 'SALE':
        setGreenBG(true);
        break;
      case 'Out of stock':
        setWhiteBlackBG(true);
        break;
      default:
        setStandartBG(true);
        break;
    }
  }, [status]);

  return (
    <div className="product">
      <div className="product-background">
        <div className="product-container">
          <div className="product-header">
            <div className="product-header-elements">
              <div className="product-header-list">
                <div className="product-header-date-publication">
                  <img
                    className="date-icon"
                    src={DateIcon}
                    alt="Date Publication"
                  />
                  <p>{props.publicateDate}</p>
                </div>
                <div className="product-header-date-category">
                  <p
                    className={`product-category ${
                      props.className ? props.className : ''
                    }`}
                  >
                    {props.category}
                  </p>
                </div>
              </div>
              <div className="product-header-list">
                {status && (
                  <div className={`${className}`}>
                    <ReactSVG
                      className="product-status-image"
                      src={require(`../../../UI/icons/${
                        confirmRequest() || 'ShoppingBag'
                      }.svg`)}
                    />
                    <span className="product-status-title">{status}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="product-main">
            <div className="product-main-elements">
              <div className="product-main-item">
                <p className="product-main-item-title">{ProductTitle}</p>
                <ProductMainElement advantage={options} />
                <div className="product-item-footer">
                  <div className="product-price">
                    <span className="product-price-header">Price</span>
                    {salePrice ? (
                      getSale()
                    ) : (
                      <span className="product-price-title">{`${findFinalCurrency(
                        currency
                      )} ${price}`}</span>
                    )}
                  </div>
                  <div className="product-button">
                    <Button onClick={() => console.log()} content="Buy now" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-background-image-container">
          <img
            alt="Product"
            src={props.image}
            className="product-background-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
