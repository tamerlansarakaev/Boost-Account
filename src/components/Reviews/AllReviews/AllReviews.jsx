// Global
import React from 'react';
import { useSelector } from 'react-redux';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

// Components

// Styles
import './AllReviews.less';

const AllReviews = () => {
  const reviews = useSelector((state) => state.server.reviews);
  return (
    <div className="all-reviews">
      <span className="all-reviews-title">All reviews</span>
      <div className="all-reviews-list">
        {reviews &&
          reviews.slice(6).map((review, i) => {
            return (
              <ReviewsItem
                datePublication={review.publictaionDate}
                title={review.titleReview}
                description={review.description}
                authorName={review.name}
                currentRate={review.rate}
                key={i}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AllReviews;
