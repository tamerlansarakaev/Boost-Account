import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import ModalAlerts from '../ModalAlerts/ModalAlerts';
import { RATING_NOT_SELECTED } from './alertsTypes';

const ModalAlertsList = () => {
  const siteState = useSelector((state) => state.site);
  const className = classNames({ activeModalAlerts: siteState.statusError });
  function getModalAlerts(type) {
    switch (type) {
      case RATING_NOT_SELECTED:
        return (
          <ModalAlerts
            title="Choose Feedback"
            color="#FF4545"
            className={className}
          />
        );
      default:
        return;
    }
  }

  return <>{getModalAlerts(siteState.statusAlerts)}</>;
};

export default ModalAlertsList;
