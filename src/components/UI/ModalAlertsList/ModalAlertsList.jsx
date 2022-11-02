/* eslint-disable react-hooks/exhaustive-deps */

// Global
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import ModalAlerts from '../ModalAlerts/ModalAlerts';
import { RATING_NOT_SELECTED } from './alertsTypes';

const ModalAlertsList = () => {
  const modalState = useSelector((state) => state.modalReducer);
  console.log(modalState.status);

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
      default:
        return;
    }
  }

  return (
    <>{modalState.statusMessage ? getModalAlerts(modalState.status) : ''}</>
  );
};

export default ModalAlertsList;
