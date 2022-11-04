import React from 'react';
import { useSelector } from 'react-redux';
import { ALL_REVIEWS, CREATE_REVIEW_MODAL } from './modalTypes';

// Components
import ReviewModal from '../../Reviews/ReviewModal/ReviewModal';
import AllReviews from '../../Reviews/AllReviews/AllReviews';

const ModalList = () => {
  const siteModalType = useSelector((state) => state.site.modalType);
  function getModal(type) {
    switch (type) {
      case CREATE_REVIEW_MODAL:
        return <ReviewModal />;
      case ALL_REVIEWS:
        return <AllReviews/>
      default:
        return '';
    }
  }

  return <>{siteModalType && getModal(siteModalType)}</>;
};

export default ModalList;
