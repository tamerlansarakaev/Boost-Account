// Global
import React from 'react';
import dayjs from 'dayjs';

// Styles
import './ReviewsItem.less';

// UI
import ReviewRate from '../ReviewRate/ReviewRate';

function ReviewsItem({
  datePublication,
  authorName,
  description,
  title,
  currentRate,
}) {
  const postDate = dayjs(datePublication).format('YYYY/MM/DD');
  return (
    <div className="review-item">
      <div className="review-item-container">
        <div className="review-item-header">
          <div className="review-rate">
            <ReviewRate currentRate={currentRate} />
          </div>
          <span className="review-date-publication">{postDate}</span>
        </div>
        <div className="review-item-main">
          <span className="review-title">{title}</span>
          <p className="review-decription">{description}</p>
        </div>
        <div className="review-footer">
          <span className="review-author">{authorName}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewsItem;
