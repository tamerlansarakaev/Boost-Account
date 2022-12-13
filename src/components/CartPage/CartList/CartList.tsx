import React from 'react';

// Components
import CartItem from '../CartItem/CartItem';

// Styles
import './CartList.less';

export interface ICartItem {
  id: number;
  ProductTitle: string;
  price: number;
  image: string;
  currency: string;
  options: Array<string>;
  onDelete: (state: any) => void;
}

function CartList() {
  const [cartProducts, setCartProducts] = React.useState<Array<ICartItem>>();
  const activeCartProducts = localStorage.getItem('cartProducts');

  function getStorageProduct(): ICartItem[] | undefined {
    if (!activeCartProducts) return;
    const storageProducts = JSON.parse(activeCartProducts);
    return storageProducts;
  }
  React.useEffect(() => {
    if (activeCartProducts?.length) {
      setCartProducts(getStorageProduct());
    }
  }, [activeCartProducts] || [cartProducts]);
  return (
    <div className="cart-list">
      {cartProducts ? (
        cartProducts.map((product, i) => {
          return (
            <CartItem
              {...product}
              key={i}
              onDelete={(state) => console.log(state)}
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
