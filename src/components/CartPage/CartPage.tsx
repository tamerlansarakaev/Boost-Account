/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

// Components
import { CART_PAGE } from '../../reducers/types';
import LogoSite from '../UI/Logo/Logo';
import CartList, { ICartItem } from './CartList/CartList';

// Styles
import './CartPage.less';

interface ISiteState {
  cartProduct: Array<ICartItem>;
  modalType: string;
}

export interface ICartPageProps {
  state: object;
  modalReducer: {
    statusPage: boolean;
    cartPage: boolean;
    image: string;
  };
  site: ISiteState;
}

const CartPage: React.FC<ICartPageProps> = () => {
  const [status, setStatus] = React.useState<boolean>(false);
  const stateModal = useSelector((state: ICartPageProps) => state.modalReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (stateModal.cartPage) {
      setStatus(stateModal.cartPage);
    }
  }, [stateModal]);

  function statusPage() {
    setTimeout(() => {
      setStatus(false);
      dispatch({ type: CART_PAGE, cartPage: false });
    }, 1000);
  }

  React.useEffect(() => {
    if (status) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [status]);

  return (
    <div className={`cart-page`}>
      <div className="cart-page-line"></div>
      <div className="cart-page-container">
        <div className="cart-page-header">
          <div className="cart-page-back">
            <NavLink to={'/Boost-Account'}>
              <button className="come-back" onClick={() => statusPage()}>
                <ReactSVG
                  className="come-back-icon"
                  src={require('../../UI/icons/comeBack.svg').default}
                />
              </button>
            </NavLink>
          </div>
          <LogoSite />
        </div>
        <div className="cart-page-main">
          <CartList />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
