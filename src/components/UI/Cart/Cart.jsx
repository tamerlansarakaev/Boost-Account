// Global
import React from 'react';
import { NavLink } from 'react-router-dom';

// Components

// UI
import CartIcon from '../../../UI/icons/basket.svg';

// Styles
import './Cart.less';

function Cart() {
  const [status, setStatus] = React.useState(false);
  const [version] = React.useState('0.6');
  React.useEffect(() => {
    if (status) {
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
