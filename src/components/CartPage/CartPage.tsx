import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import allTypes from '../../reducers/types';

// Components
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: allTypes.SELECT_MODAL, modals: [] });
    return;
  }, []);

  return (
    <div className={`cart-page`}>
      <div className="cart-page-line"></div>
      <div className="cart-page-container">
        <div className="cart-page-header">
          <div className="cart-page-back">
            <NavLink to={'/Boost-Account'}>
              <button className="come-back">
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
