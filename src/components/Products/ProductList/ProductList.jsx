/* eslint-disable react-hooks/exhaustive-deps */
// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import ProductItem from '../ProductItem/ProductItem';

// Styles
import './ProductList.less';

// UI
import IconMost from '../../../UI/icons/most.svg';
import { CART_PRODUCT } from '../../../reducers/types';

function ProductList() {
  const products = useSelector((state) => state.server.products) || [];
  const stateServer = useSelector((state) => state.server);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
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
    if (cartProduct.length) {
      dispatch({ ...state, type: CART_PRODUCT, cartProduct: cartProduct });
    }
  }, [cartProduct]);

  return (
    <div className="products">
      <div className="products-header">
        <img className="products-header-logo" src={IconMost} alt="Logo Sites" />
        <h1 className="products-header-title">Most popular services</h1>
      </div>
      <div className="products-list">
        {sortArray.map((products, i) => {
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
              onClick={(product) => {
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

export default ProductList;
