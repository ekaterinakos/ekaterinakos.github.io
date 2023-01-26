import React from 'react';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../store/reviews/selectors';
import { Rating } from '../Rating/Rating';
import { Size } from '../Rating/sizeUI';
import { User } from '../User/User';
import styles from './styles.module.css'

export const Review = ({reviewId}) => {
    const review = useSelector((state) => selectReviewById(state, { reviewId }));
    
  if (!review) {
    return null;
  }
  
  return (
    <div>
        <p>
         <User userId={review.userId}/>
      </p>
      <p>{review.text}</p>
      <Rating onClickActive = {false} size={Size.s} value={review.rating} />
    </div>
  );
};
