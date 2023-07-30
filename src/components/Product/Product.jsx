import React from 'react';
import { Button } from '../Button/Button';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from '../../store/cart';
import { selectCartProductById } from '../../store/cart/selectors';
import { selectProductById } from '../../store/products/selectors';

export const Product = ({ productId, className }) => {
  const product = useSelector((state) => {
    return selectProductById(state, { productId });
  });

  const count = useSelector((state) => {
    return selectCartProductById(state, { productId });
  });

  const increment = () => dispatch(cartSlice.actions.addProduct(product.id));
  const decrement = () => dispatch(cartSlice.actions.removeProduct(product.id));
  const dispatch = useDispatch();
  const addOnClick = () =>
    dispatch(cartSlice.actions.addProductToCart(product.id));

  return (
    <div className={classnames(styles.root, className)}>
      <img alt={product.name} src={product.image} />
      <h3 className={styles.title}>{product.name}</h3>
      <div>
        <aside className={styles.cartButtonConteiner}>
          <Button
            className={styles.buttonCounter}
            onClick={increment}
            children={'+'}
          />
          <span className={styles.count}>{count}</span>
          <Button
            className={styles.buttonCounter}
            onClick={decrement}
            children={'-'}
          />
        </aside>
        <p className={styles.priceCount}>
          {count >= 1 ? product.price * count + '$' : product.price + '$'}
        </p>
      </div>
      <p className={styles.buttonConteiner}>
        <Button
          onClick={addOnClick}
          className={styles.buttonAddToCart}
          children={'add to cart'}
        />
      </p>
    </div>
  );
};
