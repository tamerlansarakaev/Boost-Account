import React from 'react';

// Components
import CartItem from '../CartItem/CartItem';

// Styles
import './CartList.less';
import { useDispatch, useSelector } from 'react-redux';
import allTypes from '../../../reducers/types';

export interface ICartItem {
  id: number;
  ProductTitle: string;
  price: number;
  image: string;
  currency: string;
  options: Array<string>;
  onDelete: (state: any) => void;
  deleteKey: string;
  salePrice: number;
}

interface ICartList {
  site: {
    cartProduct: ICartItem[];
  };
}

function CartList() {
  const [cartProducts, setCartProducts] = React.useState<Array<ICartItem>>();
  const stateCartProducts = useSelector(
    (state: ICartList) => state.site.cartProduct
  );
  const dispatch = useDispatch();
  const [deleteKey, setDeleteKey] = React.useState('');

  function deleteCartProduct(key: string) {
    const resultCartProducts = stateCartProducts.filter((cartProduct) => {
      return cartProduct.deleteKey !== key;
    });
    dispatch({ type: allTypes.CART_PRODUCT, cartProduct: resultCartProducts });
    setDeleteKey('');
  }

  React.useEffect(() => {
    if (deleteKey) {
      deleteCartProduct(deleteKey);
    }
  }, [deleteKey]);

  React.useEffect(() => {
    if (stateCartProducts) {
      setCartProducts(stateCartProducts);
    }
  }, [stateCartProducts]);

  return (
    <div className="cart-list">
      {cartProducts && cartProducts.length ? (
        cartProducts.map((product: ICartItem, i) => {
          return (
            <CartItem
              {...product}
              key={i}
              onDelete={() => setDeleteKey(product.deleteKey)}
            />
          );
        })
      ) : (
        <span className="selected-products-error">Products not selected!</span>
      )}
    </div>
  );
}

export default CartList;
