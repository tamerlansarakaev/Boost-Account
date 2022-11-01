// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

// Components
import Input from '../../UI/Input/Input';
import {
  DATA_LOADED,
  ERROR_CONFIRM,
  UPDATE_DATA,
} from '../../../reducers/types';
import { inputValidate } from './actions';

// Styles
import './ReviewModal.less';
import './actions.less';
import { RATING_NOT_SELECTED } from '../../UI/ModalAlertsList/alertsTypes';

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
    if (
      inputValidate(nameInput, reviewInput, feedbackInput, finalResult) &&
      reviews
    ) {
      await fetch('http://localhost:3000/reviews', {
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
      })
        .then(() => dispatch({ ...state, type: UPDATE_DATA, status: 'UPDATE' }))
        .catch((err) => console.log(err));
    }
  }

  React.useEffect(() => {
    if (clickButton) {
      if (inputValidate(nameInput, feedbackInput, reviewInput, finalResult)) {
        postReview();
        dispatch({
          ...state,
          type: DATA_LOADED,
          modalStatus: !siteState.modalStatus,
          reviews: state.reviews,
          statusError: false,
        });
        document.body.style.overflowY = 'scroll';
      }
      if (!inputValidate(nameInput, feedbackInput, reviewInput, finalResult)) {
        dispatch({
          ...state,
          type: ERROR_CONFIRM,
          statusError: true,
        });
        setTimeout(() => {
          dispatch({
            ...state,
            type: ERROR_CONFIRM,
            statusError: false,
            statusAlerts: RATING_NOT_SELECTED,
          });
        }, 1500);
      }
      if (!finalResult) {
        dispatch({
          type: ERROR_CONFIRM,
          statusError: true,
          statusAlerts: RATING_NOT_SELECTED,
        });
      }
      setTimeout(() => {
        setClickButton(null);
      }, 1000);
    }
  }, [clickButton]);

  return (
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
            className={`modal-input${!reviewInput.length ? ' errorInput' : ''}`}
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
                      src={require('../../../UI/icons/ratingStar.svg').default}
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
            onClick={(e) => {
              setClickButton(clickButton + 1);
            }}
          >
            Post a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
