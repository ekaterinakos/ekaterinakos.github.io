import { MAX_RATING } from './constants';
import InactiveStar from './img/star.svg';
import ActivStar from './img/star-gold.svg';
import styles from './styles.module.css';
import classnames from 'classnames';
import { Size } from './sizeUI';

export const Rating = ({
  value = 1,
  onChange,
  size = Size.m,
  maxRating = MAX_RATING,
  className,
  onClickActive = true
}) => {
  return (
    <div className={classnames(className)}>
      {[...Array(maxRating)].map((_, index) => (
        <img
          className={classnames(styles[size], styles.star)}
          key={index}
          src={index >= value ? InactiveStar : ActivStar}
          alt="icon star"
          loading="lazy"
          onClick ={onClickActive? () => onChange(index + 1): null}
        />
      ))}
    </div>
  );
};
