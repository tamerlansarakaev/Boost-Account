/* eslint-disable react-hooks/exhaustive-deps */
// Global
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import ProductItem from '../ProductItem/ProductItem';

// Styles
import './ProductList.less';

// UI
import IconMost from '../../../UI/icons/most.svg';

function ProductList() {
  const products = useSelector((state) => state.server.products) || [];
  const stateServer = useSelector((state) => state.server);
  const sortArray = products.sort((a, b) => {
    if (a.typeProduct === stateServer.activeCategory) {
      return -1;
    } else if (b.typeProduct === stateServer.activeCategory) {
      return 1;
    } else {
      return 0;
    }
  });

  const [cartProduct, setCartProduct] = React.useState([]);
  React.useEffect(() => {
    const storage = localStorage;
    const currentStorage = JSON.parse(localStorage.getItem('cartProducts'));
    storage.clear();
    if (currentStorage && cartProduct.length) {
      const result = [...cartProduct, ...currentStorage];
      return storage.setItem('cartProducts', JSON.stringify(result));
    }

    if (cartProduct.length) {
      return storage.setItem('cartProducts', JSON.stringify(cartProduct));
    }
  }, [cartProduct]);

  return (
    <div className="products">
      <div className="products-header">
        <img className="products-header-logo" src={IconMost} alt="Logo Sites" />
        <h1 className="products-header-title">Most popular services</h1>
      </div>
      <div className="products-list">
        {sortArray.map((products) => {
          return (
            <ProductItem
              ProductTitle={products.name.toUpperCase()}
              publicateDate={products.publicationDate}
              className={
                products.typeProduct === stateServer.activeCategory
                  ? 'greenGradient'
                  : 'redGradient'
              }
              category={products.typeProduct}
              currency={products.currency}
              salePrice={products.sale}
              status={products.status}
              price={products.price}
              image={products.image}
              id={products.id}
              options={products.options}
              saveProduct={(product) => {
                setCartProduct([...cartProduct, product]);
              }}
              key={products.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(ProductList);
