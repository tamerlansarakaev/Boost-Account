// Global
import React from 'react';

// Components
import Button from '../../UI/Button/Button';
import {
  DATA_LOADED,
  GET_NEW_MODAL,
  SET_MODAL_STATUS,
} from '../../../reducers/types';

// Styles
import './ReviewPost.less';

// UI
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_REVIEW_MODAL } from '../../UI/ModalList/modalTypes';

function ReviewPost() {
  const reviews = useSelector((state) => state.server.reviews);
  const state = useSelector((state) => state.site);
  const [status, setStatus] = React.useState(false);
  const dispatch = useDispatch();

  function saveStatus() {
    if (state) {
      setStatus(!state.modalStatus);
      dispatch({
        ...state,
        type: SET_MODAL_STATUS,
        modalType: CREATE_REVIEW_MODAL,
        modalStatus: status,
      });
    } else {
      setStatus(false);
      dispatch({ ...state, type: SET_MODAL_STATUS, modalStatus: status });
    }
  }

  React.useEffect(() => {
    dispatch({ ...state, type: SET_MODAL_STATUS, modalStatus: status });
    dispatch({
      ...state,
      type: GET_NEW_MODAL,
      modalType: CREATE_REVIEW_MODAL,
    });
  }, [status]);

  function getReviewsLength() {
    if (reviews) {
      return reviews.length;
    } else {
      return '';
    }
  }
  return (
    <div className="reviews-footer">
      <div className="reviews-footer-container">
        <button className="reviews-show-all">
          <p className="reviews-all">
            See out {getReviewsLength() > 6 ? getReviewsLength() - 6 : 0}{' '}
            reviews on
          </p>
          <ReactSVG
            src={require('../../../UI/icons/Trustpilot.svg').default}
            className="reviews-footer-icon"
          />
        </button>
        <div className="create-reviews">
          <Button
            onClick={() => saveStatus()}
            content="Create review"
            classButton="reviews-create"
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewPost;
