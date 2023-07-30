import React, { useContext, useEffect, useState } from 'react';
import { NavMenu } from '../NavMenu/NavMenu';
import styles from './styles.module.css';
import { ReactComponent as CartIcon } from './img/cartIcon.svg';
import { ReactComponent as CartIconDark } from './img/cartIconDark.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCartCountIncrement,
  selectProductIdsInCart,
} from '../../store/cart/selectors';
import classnames from 'classnames';
import { ThemeContext } from '../ThemeContextProvider/ThemeContext';

export const HeaderElements = () => {
    const { theme } = useContext(ThemeContext);
  const productId = useSelector(selectProductIdsInCart);
  const countIncrement = useSelector((state) =>
    selectCartCountIncrement(state, { productId })
  );


  return (
    <>
      <NavMenu className={styles.navItem} />
      <Link
        className={classnames(
          styles.link,
          theme === 'default' ? styles.dark : 'default'
        )}
        to="/cart"
      >
        {theme === 'default' ? <CartIconDark /> : <CartIcon />}

        <span className={styles.count}>
          {productId.length ? countIncrement : null}
        </span>
      </Link>
    </>
  );
};
