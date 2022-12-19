/* eslint-disable react-hooks/exhaustive-deps */
// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

// Components
import Input from '../../UI/Input/Input';
import allTypes from '../../../reducers/types';

import {
  RATING_NOT_SELECTED,
  REVIEW_POSTED,
} from '../../UI/ModalAlertsList/alertsTypes';
import { getReviews, postReview } from '../../../services/API';

// Styles
import './ReviewModal.less';
import './actions.less';

const ReviewModal = () => {
  const [clickButton, setClickButton] = React.useState(0);
  const [review, setReview] = React.useState({
    nameInput: '',
    reviewInput: '',
    feedbackInput: '',
    rate: null,
  });

  const state = useSelector((state) => state.server);
  const rates = Array(5).fill('');
  const reviews = useSelector((state) => state.server.reviews);
  const dispatch = useDispatch();

  async function formHandle() {
    const date = new Date();
    const types = allTypes();
    const validateForm =
      review.nameInput &&
      review.reviewInput &&
      review.feedbackInput &&
      review.rate &&
      reviews;

    if (validateForm) {
      postReview(review, date).then(() => {
        dispatch({ ...state, type: allTypes.SET_MODAL_STATUS, status: 'UPDATE' });
        getReviews().then((res) => {
          dispatch({ type: types.SET_REVIEWS, reviews: res });
        });
        document.body.style.overflowY = 'scroll';
      });
    }
  }
  React.useEffect(() => {
    if (clickButton) {
      const validateForm =
        review.nameInput &&
        review.reviewInput &&
        review.feedbackInput &&
        review.rate;

      if (validateForm) {
        formHandle();
        dispatch({
          ...state,
          type: allTypes.SUCCESSFULLY_COMPLETED,
          status: REVIEW_POSTED,
          statusMessage: true,
        });
      }
      if (!review.rate) {
        dispatch({
          ...state,
          type: allTypes.NOT_SELECT_RATE,
          status: RATING_NOT_SELECTED,
          statusMessage: true,
        });
        setTimeout(() => {
          dispatch({
            ...state,
            type: allTypes.NOT_SELECT_RATE,
            status: RATING_NOT_SELECTED,
            statusMessage: false,
          });
        }, 1500);
      }
      if (
        !(
          review.nameInput &&
          review.reviewInput &&
          review.feedbackInput &&
          review.rate
        )
      ) {
        dispatch({
          type: allTypes.ERROR_CONFIRM,
          statusError: true,
          statusAlerts: RATING_NOT_SELECTED,
        });
      }
      setTimeout(() => {
        setClickButton(null);
      }, 2000);
    }
  }, [clickButton]);

  return (
    <div className="modal-box">
      <div className="modal-elements">
        <div className="modal-header">
          <p className="modal-header-title">Enter your review</p>
        </div>
        <div className="modal-input-fields">
          <div className="modal-input-element">
            <span className="modal-input-title">Your Name:</span>
            <Input
              type="text"
              required={true}
              className={`modal-input${
                !review.nameInput.length ? ' errorInput' : ''
              }`}
              onChange={(value) => setReview({ ...review, nameInput: value })}
              value={review.nameInput}
            />
          </div>
          <div className="modal-input-element">
            <span className="modal-input-title">Your review topic:</span>
            <Input
              type="text"
              required={true}
              className={`modal-input${
                !review.reviewInput.length ? ' errorInput' : ''
              }`}
              onChange={(value) => setReview({ ...review, reviewInput: value })}
            />
          </div>
          <div className="modal-input-element">
            <span className="modal-input-title">Your feedback:</span>
            <Input
              type="text"
              required={true}
              className={`modal-input${
                !review.feedbackInput.length ? ' errorInput' : ''
              }`}
              onChange={(value) =>
                setReview({ ...review, feedbackInput: value })
              }
            />
          </div>
          <div className="modal-rating-element">
            <span className="modal-rating-title">You rating:</span>
            <div className="modal-rating-box">
              {rates.map((_, i) => {
                return (
                  <React.Fragment key={i}>
                    <input
                      type="radio"
                      name="rateStar"
                      id={`rateStar${i + 1}`}
                      key={i}
                    />
                    <label htmlFor={`rateStar${i + 1}`}>
                      <ReactSVG
                        className="modal-rating-icon"
                        src={
                          require('../../../UI/icons/ratingStar.svg').default
                        }
                        onClick={() => {
                          setReview({ ...review, rate: 5 - i });
                        }}
                        key={i}
                      />
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="modal-button-element">
            <button
              className="modal-button"
              disabled={clickButton >= 2}
              onClick={(e) => {
                setClickButton(clickButton + 1);
              }}
            >
              Post a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
