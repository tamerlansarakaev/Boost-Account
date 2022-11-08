/* eslint-disable react-hooks/exhaustive-deps */
// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

// Components
import Input from '../../UI/Input/Input';
import {
  DATA_LOADED,
  ERROR_CONFIRM,
  NOT_SELECT_RATE,
  SUCCESSFULLY_COMPLETED,
  UPDATE_DATA,
} from '../../../reducers/types';

import {
  RATING_NOT_SELECTED,
  REVIEW_POSTED,
} from '../../UI/ModalAlertsList/alertsTypes';

// Styles
import './ReviewModal.less';
import './actions.less';

const ReviewModal = () => {
  const [nameInput, setNameInput] = React.useState('');
  const [reviewInput, setReviewInput] = React.useState('');
  const [feedbackInput, setFeedbackInput] = React.useState('');
  const [clickButton, setClickButton] = React.useState(0);
  const [finalResult, setFinalResult] = React.useState(null);

  const state = useSelector((state) => state.server);
  const siteState = useSelector((state) => state.site);
  const rates = Array(5).fill('');
  const reviews = useSelector((state) => state.server.reviews);
  const dispatch = useDispatch();

  async function postReview() {
    const date = new Date();

    if (nameInput && reviewInput && feedbackInput && finalResult && reviews) {
      console.log('Succes!!')
      await fetch(
        'https://my-json-server.typicode.com/tamerlansarakaev/database/reviews',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: nameInput,
            titleReview: reviewInput,
            description: feedbackInput,
            rate: finalResult,
            publictaionDate: date.toLocaleDateString(),
          }),
        }
      )
        .then(() => dispatch({ ...state, type: UPDATE_DATA, status: 'UPDATE' }))
        .catch((err) => console.log(err));
    }
  }

  React.useEffect(() => {
    if (clickButton) {
      if (nameInput && reviewInput && feedbackInput && finalResult) {
        postReview();
        dispatch({
          ...state,
          type: DATA_LOADED,
          modalStatus: !siteState.modalStatus,
          reviews: state.reviews,
        });
        dispatch({
          ...state,
          type: SUCCESSFULLY_COMPLETED,
          status: REVIEW_POSTED,
          statusMessage: true,
        });
        document.body.style.overflowY = 'scroll';
      }
      if (!finalResult) {
        dispatch({
          ...state,
          type: NOT_SELECT_RATE,
          status: RATING_NOT_SELECTED,
          statusMessage: true,
        });
        setTimeout(() => {
          dispatch({
            ...state,
            type: NOT_SELECT_RATE,
            status: RATING_NOT_SELECTED,
            statusMessage: false,
          });
        }, 1500);
      }
      if (!(nameInput && reviewInput && feedbackInput && finalResult)) {
        dispatch({
          type: ERROR_CONFIRM,
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
              className={`modal-input${!nameInput.length ? ' errorInput' : ''}`}
              onChange={(value) => setNameInput(value)}
              value={nameInput}
            />
          </div>
          <div className="modal-input-element">
            <span className="modal-input-title">Your review topic:</span>
            <Input
              type="text"
              className={`modal-input${
                !reviewInput.length ? ' errorInput' : ''
              }`}
              onChange={(value) => setReviewInput(value)}
            />
          </div>
          <div className="modal-input-element">
            <span className="modal-input-title">Your feedback:</span>
            <Input
              type="text"
              className={`modal-input${
                !feedbackInput.length ? ' errorInput' : ''
              }`}
              onChange={(value) => setFeedbackInput(value)}
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
                          setFinalResult(5 - i);
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
