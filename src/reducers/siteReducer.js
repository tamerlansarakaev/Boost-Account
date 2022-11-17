import { LOADING_SITE } from '../components/UI/ModalList/modalTypes';
import {
  CART_PRODUCT,
  ERROR_CONFIRM,
  SET_MODAL_STATUS,
  VIEW_REVIEWS,
} from './types';

const initialStore = {
  statusError: false,
};

const siteReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_MODAL_STATUS:
      return {
        ...state,
        modalStatus: action.modalStatus,
        modalType: action.modalType,
      };
    case ERROR_CONFIRM:
      return {
        ...state,
        statusError: action.statusError,
        statusAlerts: action.statusAlerts,
      };
    case VIEW_REVIEWS:
      return {
        ...state,
        modalStatus: action.modalStatus,
        modalType: action.modalType,
      };
    case CART_PRODUCT:
      return {
        ...state,
        cartProduct: action.cartProduct,
      };

    case LOADING_SITE:
      return {
        ...state,
        modalType: LOADING_SITE,
        modalStatus: true,
      };
    default:
      return state;
  }
};

export default siteReducer;
