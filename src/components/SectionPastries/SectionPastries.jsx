import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { Products } from '../Products/Products';
import { useSelector } from 'react-redux';
import { selectBakes } from '../../store/category/selectors';
import { useState } from 'react';
import { Button } from '../Button/Button';

export const SectionPastries = () => {
  const bakeProductsId = useSelector(selectBakes);
  const [hidden, setHidden] = useState(true);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Pastries</h2>
      <Products
        className={classnames(styles.list, { [styles.hiddenStyle]: hidden })}
        productId={bakeProductsId}
      />
      <Button
        onClick={() => setHidden(!hidden)}
        className={classnames(styles.button,{ [styles.hiddenStyleButton]: !hidden })}
      >
        {'V'}
      </Button>
    </section>
  );
};
