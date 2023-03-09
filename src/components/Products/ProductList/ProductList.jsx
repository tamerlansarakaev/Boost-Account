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
import allTypes from '../../../reducers/types';

function ProductList() {
  const products = useSelector((state) => state.server.products) || [];
  const stateServer = useSelector((state) => state.server);
  const cartProducts = useSelector((state) => state.site.cartProduct);
  const selectModal = useSelector((state) => state.modalReducer.modal);
  const sortArray = products.sort((a, b) => {
    if (a.typeProduct === stateServer.activeCategory) {
      return -1;
    } else if (b.typeProduct === stateServer.activeCategory) {
      return 1;
    } else {
      return 0;
    }
  });
  const dispatch = useDispatch();

  const [cartProduct, setCartProduct] = React.useState([]);
  async function activeCartProducts() {
    dispatch({ type: allTypes.CART_PRODUCT, cartProduct });
  }

  function callSelectModal() {
    dispatch({
      type: allTypes.SELECT_MODAL,
      modal: [
        ...(selectModal || ''),
        {
          title: 'PRODUCT ADDED TO CART',
          color: 'rgb(151, 255, 69)',
        },
      ],
    });
  }

  React.useEffect(() => {
    if (cartProduct && cartProduct.length) {
      activeCartProducts();
      return;
    }

    if (cartProducts && cartProducts.length) {
      setCartProduct(cartProducts);
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
                setCartProduct((cartItems) => {
                  return [...cartItems, product];
                });
                callSelectModal();
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
