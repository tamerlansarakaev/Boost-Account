import allTypes from './types';

const initialStore: Action = {
  notificationStatus: false,
  type: '',
  status: '',
  statusMessage: false,
  statusModal: false,
  cartPage: false,
  modal: [],
};

interface Action {
  type: string;
  notificationStatus: boolean;
  status: string;
  statusMessage: boolean;
  statusModal: boolean;
  cartPage: boolean;
  modal: Array<object>;
}

const types = allTypes;

const modalReducer = (state = initialStore, action: Action) => {
  switch (action.type) {
    case types.NOTIFICATION_MODAL:
      return {
        ...state,
        notificationStatus: action.notificationStatus,
      };
    case types.SUCCESSFULLY_COMPLETED:
      return {
        ...state,
        status: action.status,
        statusMessage: action.statusMessage,
        statusModal: action.statusModal,
      };

    case types.NOT_SELECT_RATE:
      return {
        ...state,
        status: action.status,
        statusMessage: action.statusMessage,
      };
    case types.REQUEST_PROCESSED:
      return {
        ...state,
        statusMessage: false,
      };
    case types.CART_PAGE:
      return {
        ...state,
        cartPage: action.cartPage,
      };

    case types.SELECT_MODAL:
      return {
        ...state,
        modal: action.modal,
      };
    default:
      return state;
  }
};

export default modalReducer;
