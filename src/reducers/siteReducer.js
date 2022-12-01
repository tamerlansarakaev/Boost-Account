import { LOADING_SITE } from '../components/UI/ModalList/modalTypes';
import { allTypes } from './types';

const initialStore = {
  statusError: false,
};

const types = allTypes();

const siteReducer = (state = initialStore, action) => {
  switch (action.type) {
    case types.SET_MODAL_STATUS:
      return {
        ...state,
        modalStatus: action.modalStatus,
        modalType: action.modalType,
      };
    case types.ERROR_CONFIRM:
      return {
        ...state,
        statusError: action.statusError,
        statusAlerts: action.statusAlerts,
      };
    case types.VIEW_REVIEWS:
      return {
        ...state,
        modalStatus: action.modalStatus,
        modalType: action.modalType,
      };
    case types.CART_PRODUCT:
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
