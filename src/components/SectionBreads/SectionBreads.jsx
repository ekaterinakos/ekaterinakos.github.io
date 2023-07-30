import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { Products } from '../Products/Products';
import { useSelector } from 'react-redux';
import { selectBread } from '../../store/category/selectors';

export const SectionBreads = () => {
  const breadProductsId = useSelector(selectBread)
  
 
    return (
      <section id="breads" className={styles.root}>
        <h2 className={styles.title}>Breads</h2>
        <Products className={styles.list} productId={breadProductsId} />
      </section>
    );
}