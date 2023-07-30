import React from 'react';
import { Product } from '../Product/Product';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {
  selectCategoryById,
  selectProductIdsById,
} from '../../store/category/selectors';


export const Products = ({ productId, className, style,title=false }) => {
  const products = useSelector((state) =>
    selectProductIdsById(state, { productId })
  );
  const category = useSelector((state) =>
    selectCategoryById(state, { productId })
  );

  return (
    <>
      {title ? <h2 className={styles.title}>{category.name}</h2> : null}

      <ul
        style={style}
        className={classnames(styles.list, styles.root, className)}
      >
        {products.map((product) => (
          <li className={styles.item} key={product}>
            <Product productId={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

