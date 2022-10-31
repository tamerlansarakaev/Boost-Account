import React from 'react';
import { useSelector } from 'react-redux';
import { CREATE_REVIEW_MODAL } from './modalTypes';

// Components
import ReviewModal from '../../Reviews/ReviewModal/ReviewModal';

const ModalList = () => {
  const modalType = useSelector((state) => state.site.modalType);
  function getModal(type) {
    switch (type) {
      case CREATE_REVIEW_MODAL:
        return <ReviewModal />;
      default:
        return '';
    }
  }

  return <>{modalType && getModal(modalType)}</>;
};

export default ModalList;
