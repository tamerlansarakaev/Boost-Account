import { ERROR_CONFIRM, SET_MODAL_STATUS } from './types';

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
    default:
      return state;
  }
};

export default siteReducer;
