import React, { useState } from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { Products } from '../../components/Products/Products';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { selectProductSearchName } from '../../store/category/selectors';

export const InputWithDebounce = ({
  initialValue,
  onChange,
  className,
  onBlur,
  onFocus,
  placeholder,
}) => {
  const [value, setValue] = useState(initialValue);

  const onChangeWithDebounce = useDebouncedCallback(onChange, 1000);
  return (
    <input
      onBlur={onBlur}
      onFocus={onFocus}
      value={value}
      placeholder={placeholder}
      onChange={(event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChangeWithDebounce(newValue);
      }}
      className={classnames(styles.input)}
    />
  );
};

export const ProductsPage = () => {

    
  // const productId = useSelector(selectCategoryIds);
  const [search, setSearch] = useSearchParams();
  const [active, setActive] = useState(false);
  const productId = useSelector((state) =>
    selectProductSearchName(state, {
      serachValue: search.get('productName') || '',
    })
  );


  return (
    <div className={classnames(styles.root)}>
      <label
        className={classnames(styles.search, { [styles.isActive]: active })}
      >
        <InputWithDebounce
          placeholder={active? "cake...": null}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          initialValue={search.get('productName') || ''}
          onChange={(value) => setSearch(value ? { productName: value } : {})}
        />
      </label>
      {productId.map((product) => (
        <section className={styles.item} key={product}>
          <Products className={styles.list} productId={product} title={true} />
        </section>
      ))}
    </div>
  );
};
