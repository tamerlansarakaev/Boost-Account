/* eslint-disable react-hooks/exhaustive-deps */

// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_PROCESSED } from '../../../reducers/types';

// Components
import ModalAlerts from '../ModalAlerts/ModalAlerts';
import { RATING_NOT_SELECTED, REVIEW_POSTED } from './alertsTypes';

const ModalAlertsList = () => {
  const modalState = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  function hiddenModal() {
    setTimeout(() => {
      return dispatch({ type: REQUEST_PROCESSED });
    }, 800);
  }
  function getModalAlerts(type) {
    switch (type) {
      case RATING_NOT_SELECTED:
        return (
          <ModalAlerts
            title="Choose Feedback"
            color="#FF4545"
            className={'activeModalAlerts'}
          />
        );
      case REVIEW_POSTED:
        return (
          <ModalAlerts
            title="Your feedback for moderation!"
            color="#75FF69"
            className={'activeModalAlerts'}
          />
        );
      default:
        return;
    }
  }
  React.useEffect(() => {
    if (modalState.statusMessage) {
      hiddenModal();
    }
  }, [modalState.statusMessage]);
  return (
    <>{modalState.statusMessage ? getModalAlerts(modalState.status) : ''}</>
  );
};

export default ModalAlertsList;
