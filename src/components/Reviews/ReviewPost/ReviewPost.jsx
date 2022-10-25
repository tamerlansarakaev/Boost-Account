// Global
import React from 'react';

// Components
import Button from '../../UI/Button/Button';
import { DATA_LOADED } from '../../../reducers/types';

// Styles
import './ReviewPost.less';

// UI
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';

function ReviewPost() {
  const reviews = useSelector((state) => state.reviews);
  const state = useSelector((state) => state);
  const [status, setStatus] = React.useState(false);
  const dispatch = useDispatch();

  function saveStatus() {
    if (state) {
      setStatus(!state.modalStatus);
      dispatch({ ...state, type: DATA_LOADED, modalStatus: status });
    } else {
      setStatus(false);
      dispatch({ ...state, type: DATA_LOADED, modalStatus: status });
    }
  }

  React.useEffect(() => {
    dispatch({ ...state, type: DATA_LOADED, modalStatus: status });
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
