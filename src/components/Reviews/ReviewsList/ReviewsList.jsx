// Global
import React from 'react';
import { ReactSVG } from 'react-svg';

// Components

// Styles
import './ReviewsList.less';

// UI
import ReviewsIcon from '../../../UI/icons/star.svg';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { useSelector } from 'react-redux';
import ReviewPost from '../ReviewPost/ReviewPost';

function ReviewsList() {
  const reviews = useSelector((state) => state.reviews);

  return (
    <div className="reviews">
      <div className="reviews-container">
        <div className="reviews-title">
          <ReactSVG src={ReviewsIcon} />
          <span>Only trusted reviews</span>
        </div>
        <div className="reviews-items">
          {reviews &&
            reviews
              .filter((_, i) => i < 6)
              .map((reviews, i) => {
                return (
                  <ReviewsItem
                    datePublication={reviews.publictaionDate}
                    title={reviews.titleReview}
                    description={reviews.description}
                    authorName={reviews.name}
                    currentRate={reviews.rate}
                    key={i}
                  />
                );
              })}
        </div>
        <ReviewPost />
      </div>
    </div>
  );
}

export default ReviewsList;
