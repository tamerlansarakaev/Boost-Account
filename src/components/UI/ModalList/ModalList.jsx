import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALL_REVIEWS, CREATE_REVIEW_MODAL, LOADING_SITE } from './modalTypes';

// Components
import ReviewModal from '../../Reviews/ReviewModal/ReviewModal';
import AllReviews from '../../Reviews/AllReviews/AllReviews';
import LoadingSiteModal from '../../LoadingSiteModal/LoadingSiteModal';
import { SET_MODAL_STATUS } from '../../../reducers/types';
import Modal from '../Modal/Modal';

const ModalList = () => {
  const state = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const siteModalType = useSelector((state) => state.site.modalType);
  const [status, setStatus] = React.useState(true);

  function saveStatus() {
    if (state.statusModal) {
      setStatus(!state.modalStatus);
      dispatch({
        ...state,
        type: SET_MODAL_STATUS,
        modalStatus: status,
      });
    } else {
      setStatus(false);
      dispatch({ ...state, type: SET_MODAL_STATUS, modalStatus: status });
    }
  }
  React.useEffect(() => {
    dispatch({ ...state, type: SET_MODAL_STATUS, modalStatus: status });

    if (status) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [status]);

  function getModal(type) {
    switch (type) {
      case CREATE_REVIEW_MODAL:
        return (
          <Modal onClick={() => saveStatus()}>
            <ReviewModal />
          </Modal>
        );
      case ALL_REVIEWS:
        return (
          <Modal onClick={() => saveStatus()}>
            <AllReviews />
          </Modal>
        );
      case LOADING_SITE:
        return (
          <Modal>
            <LoadingSiteModal />
          </Modal>
        );
      default:
        return '';
    }
  }

  return <>{siteModalType && getModal(siteModalType)}</>;
};

export default ModalList;
