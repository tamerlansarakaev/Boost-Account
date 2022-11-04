import {
  NOTIFICATION_MODAL,
  NOT_SELECT_RATE,
  REQUEST_PROCESSED,
  SUCCESSFULLY_COMPLETED,
} from './types';

const initialStore = {
  notificationStatus: false,
};

const modalReducer = (state = initialStore, action) => {
  switch (action.type) {
    case NOTIFICATION_MODAL:
      return {
        notificationStatus: action.notificationStatus,
      };
    case SUCCESSFULLY_COMPLETED:
      return {
        ...state,
        status: action.status,
        statusMessage: action.statusMessage,
      };

    case NOT_SELECT_RATE:
      return {
        ...state,
        status: action.status,
        statusMessage: action.statusMessage,
      };
    case REQUEST_PROCESSED:
      return {
        ...state,
        statusMessage: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
