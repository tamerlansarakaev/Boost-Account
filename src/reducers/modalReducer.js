import {
  NOTIFICATION_MODAL,
  NOT_SELECT_RATE,
  SUCCESSFULLY_COMPLETED,
} from './types';

const initialStore = {
  notificationStatus: false,
};

const modalReducer = (state = initialStore, action) => {
  console.log(action.statusMessage);
  switch (action.type) {
    case NOTIFICATION_MODAL:
      return {
        notificationStatus: action.notificationStatus,
      };
    case SUCCESSFULLY_COMPLETED:
      return {
        ...state,
        status: action.status,
      };

    case NOT_SELECT_RATE:
      return {
        ...state,
        status: action.status,
        statusMessage: action.statusMessage,
      };
    default:
      return state;
  }
};

export default modalReducer;
