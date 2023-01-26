import React, { useEffect, useState } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import styles from './styles.module.css';
import { ReactComponent as CartIcon } from './img/cartIcon.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCartCountIncrement,
  selectProductIdsInCart,
} from '../../store/cart/selectors';
import classnames from 'classnames';

export const HeaderElements = () => {
  const productId = useSelector(selectProductIdsInCart);
  const countIncrement = useSelector((state) =>
    selectCartCountIncrement(state, { productId })
  );


  return (
    <>
      <NavMenu className={styles.navItem} />
      <Link className={styles.link} to="/cart">
        <CartIcon />
        <span className={styles.count}>
          {productId.length ? countIncrement : null}
        </span>
      </Link>
    </>
  );
};
