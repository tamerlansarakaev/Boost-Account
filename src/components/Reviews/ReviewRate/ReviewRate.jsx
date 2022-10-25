// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Components

// Styles
import './ReviewRate.less';

// UI

function ReviewRate({ currentRate }) {
  const rates = Array(currentRate).fill('');

  return (
    <div className="review-rate-item">
      {rates &&
        rates.map((__, i) => {
          return (
            <ReactSVG
              src={require('../../../UI/icons/review star.svg').default}
              className="rate-icon"
              key={i}
            />
          );
        })}
    </div>
  );
}

export default ReviewRate;
