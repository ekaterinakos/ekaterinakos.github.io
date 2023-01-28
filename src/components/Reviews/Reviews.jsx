import React from 'react';
import { useSelector } from 'react-redux';
import { selectReviewIds } from '../../store/reviews/selectors';
import { Button } from '../Button/Button';
import { Review } from '../Review/Review';
import { useSlide } from '../../hooks/useSlide';
import styles from './styles.module.css';
import classnames from 'classnames';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Reviews = () => {
  const reviewIds = useSelector(selectReviewIds);
  
  const itemsLength = reviewIds.length;
  const itemFullWidth = 365;

  const { transformStyle, leftTranslate, rightTranslate } = useSlide(itemsLength, itemFullWidth);

  return (
    <section className={styles.root}>
      <div className={styles.carouselConteiner}>
        <div className={styles.carouselInner}>
          <ul style={transformStyle} className={styles.list}>
            {reviewIds.map((reviewId) => (
              <li className={styles.item} key={reviewId}>
                <Review reviewId={reviewId} />
              </li>
            ))}
          </ul>
        </div>
        <ReviewForm className={styles.reviewButton} />
        <Button
          onClick={leftTranslate}
          className={classnames(styles.buttonCarousel, styles.buttonLeft)}
        >
          {'<'}
        </Button>
        <Button
          onClick={rightTranslate}
          className={classnames(styles.buttonCarousel, styles.buttonRight)}
        >
          {'>'}
        </Button>
      </div>
    </section>
  );
};
