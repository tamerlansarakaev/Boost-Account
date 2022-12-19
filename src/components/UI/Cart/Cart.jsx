// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import allTypes from '../../../reducers/types';

// Components

// UI
import CartIcon from '../../../UI/icons/basket.svg';

// Styles
import './Cart.less';

function Cart() {
  const [status, setStatus] = React.useState(false);
  const [version] = React.useState('0.5');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (status) {
      dispatch({ ...state, type: allTypes.CART_PAGE, cartPage: true });
      setStatus(false);
    }
  }, [status]);
  return (
    <>
      {version === '0.6' ? (
        <NavLink to={'/Boost-Account/cart'}>
          <div className="Cart" onClick={() => setStatus(true)}>
            <img src={CartIcon} alt="Add to Cart" className="cart-icon" />
          </div>
        </NavLink>
      ) : (
        <div className="Cart" onClick={() => setStatus(true)}>
          <img src={CartIcon} alt="Add to Cart" className="cart-icon" />
        </div>
      )}
    </>
  );
}

export default Cart;
