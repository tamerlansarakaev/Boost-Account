import { LOADING_SITE } from '../components/UI/ModalList/modalTypes';
import allTypes from './types';

const initialStore: IReducerSiteState = {
  statusError: false,
  cartProduct: [],
  modalStatus: false,
};

interface IActionSiteItems {
  type: string;
  modalStatus: Boolean;
  modalType: string;
  statusError: Boolean;
  statusAlerts: string;
  cartProduct: Array<object>;
}

interface IReducerSiteState {
  statusError: Boolean;
  modalStatus: Boolean;
  cartProduct: Array<object>;
}

const siteReducer = (
  state: IReducerSiteState = initialStore,
  action: IActionSiteItems
) => {
  switch (action.type) {
    case allTypes.SET_MODAL_STATUS:
      return {
        ...state,
        modalStatus: action.modalStatus,
        modalType: action.modalType,
      };
    case allTypes.ERROR_CONFIRM:
      return {
        ...state,
        statusError: action.statusError,
        statusAlerts: action.statusAlerts,
      };
    case allTypes.VIEW_REVIEWS:
      return {
        ...state,
        modalStatus: action.modalStatus,
        modalType: action.modalType,
      };
    case allTypes.CART_PRODUCT:
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
