import React, { useCallback } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectCakes } from '../../store/category/selectors';
import { Products } from '../Products/Products';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const SectionCakes = () => {
  const cakeProductId = useSelector(selectCakes);
  const [hidden, setHidden] = useState(true);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Cakes</h2>
      <Products
        className={classnames(styles.list, { [styles.hiddenStyle]: hidden })}
        productId={cakeProductId}
      />
      <Button
        className={ classnames( styles.button ,{ [styles.hiddenStyleButton]: !hidden })}
        onClick={() => setHidden(!hidden)}
      >
        {'V'}
      </Button>
    </section>
  );
};
