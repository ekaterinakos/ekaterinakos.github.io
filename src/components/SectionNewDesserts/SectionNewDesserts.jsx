import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {
  selectNewProducts,
  selectNewProductsLength,
} from '../../store/category/selectors';
import { Products } from '../Products/Products';
import { Button } from '../Button/Button';
import { useSlide } from '../../hooks/useSlide';

export const SectionNewDesserts = () => {
  const categoryId = useSelector(selectNewProducts);

  const slideItemsLength = useSelector(selectNewProductsLength);
  const itemFullWidth = 370; //offsetWidth + margins//
  const { transformStyle, leftTranslate, rightTranslate } = useSlide(
    slideItemsLength,
    itemFullWidth
  );

  return (
    <section id="newDesserts" className={classnames(styles.root)}>
      <h2 className={styles.title}>New Seasonal Desserts</h2>
      <div className={styles.buttonConteiner}>
        <div className={styles.carouselInner}>
          <Products
            style={transformStyle}
            productId={categoryId}
            className={styles.list}
          />
        </div>
        <Button
          onClick={leftTranslate}
          className={classnames(styles.buttonCarousel, styles.buttonLeft)}
        >
          &laquo;
        </Button>
        <Button
          onClick={rightTranslate}
          className={classnames(styles.buttonCarousel, styles.buttonRight)}
        >
          &raquo;
        </Button>
      </div>
    </section>
  );
};
