/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

// Components
import { CART_PAGE, GET_PRODUCT } from '../../reducers/types';
import LogoSite from '../UI/Logo/Logo';
import CartItem from './CartItem/CartItem';

// Styles
import './CartPage.less';

interface ISiteStateObject {
  length: JSX.Element[];
  cartProduct: Array<[]>;
  image: string;
  site: object;
}

export interface ISiteState {
  state?: object;
  cartProduct?: ISiteStateObject;
  image?: string;
  site?: ISiteStateObject;
}

interface ICartPageProps {
  state: object;
  modalReducer: {
    statusPage: boolean;
    cartPage: boolean;
    image: string;
  };
  site: object;
}

const CartPage: React.FC<ICartPageProps> = (product) => {
  const [status, setStatus] = React.useState<boolean>(false);
  const stateModal = useSelector((state: ICartPageProps) => state.modalReducer);
  const state = useSelector((state: ICartPageProps) => state);
  const stateSite = useSelector((state: ISiteStateObject) => state.site);
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

  React.useEffect(() => {
    dispatch({ ...state, type: GET_PRODUCT });
  }, [stateSite]);

  return (
    <div className={`cart-page`}>
      <div className="cart-page-line"></div>
      <div className="cart-page-container">
        <div className="cart-page-header">
          <div className="cart-page-back">
            <NavLink to={'/'}>
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
          <CartItem image="https://sun9-81.userapi.com/impg/rUqG3z9ITfmGj8BfAi0CncxtGxP-VF4yStBpHQ/pYoeQ5qjYHI.jpg?size=1280x720&quality=96&sign=1c47877299921e0fe1a8cc688a6daae5&type=album" />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
