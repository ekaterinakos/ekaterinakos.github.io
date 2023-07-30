import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import {
  selectCartTotalPrice,
  selectProductIdsInCart,
} from '../../store/cart/selectors';
import { Product } from '../../components/Product/Product';
import { Button } from '../../components/Button/Button';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

const initialState = {
  name: '',
  location: '',
  email: '',
  phone: '',
};

const FormActions = {
  name: 'setName',
  location: 'setLocation',
  email: 'setEmail',
  phone: 'setPhone',
};

const reducer = (state, action) => {
  switch (action?.type) {
    case FormActions.name: {
      return {
        ...state,
        name: action.payload,
        location: '',
        email: '',
        phone: '',
      };
    }
    case FormActions.email: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case FormActions.location: {
      return {
        ...state,
        location: action.payload,
      };
    }
    case FormActions.phone: {
      return {
        ...state,
        phone: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const CartPage = () => {
  const productId = useSelector(selectProductIdsInCart);
  const totalPrice = useSelector((state) =>
    selectCartTotalPrice(state, { productId })
  );
  const navigate = useNavigate();
  const [value, dispatch] = useReducer(reducer, initialState);


  if (!productId?.length) {
    return (
      <div className={styles.emptyCart}>
        <h2>Cart is Empty</h2>
        <Button onClick={() => navigate('/products')}>{'order now'}</Button>
      </div>
    );
  }

  return (
    <div className={classnames(styles.root)}>
      <Header/>
      <ul className={styles.cartList}>
        {productId.map((productId) => (
          <li className={styles.cartItem} key={productId}>
            <Product
              className={classnames(styles.product)}
              key={productId}
              productId={productId}
            />
          </li>
        ))}
      </ul>

      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <div>
            <input
              value={value.name}
              onChange={(event) => {
                dispatch({
                  type: FormActions.name,
                  payload: event.target.value,
                });
              }}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              value={value.location}
              type="text"
              name="locatiotion"
              placeholder="Location"
              required
              onChange={(event) =>
                dispatch({
                  type: FormActions.location,
                  payload: event.target.value,
                })
              }
            />
          </div>
          <div>
            <input
              value={value.email}
              onChange={(event) =>
                dispatch({
                  type: FormActions.email,
                  payload: event.target.value,
                })
              }
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              value={value.phone}
              min="6"
              max="10"
              type="phone"
              onChange={(event) =>
                dispatch({
                  type: FormActions.phone,
                  payload: event.target.value,
                })
              }
              name="tel"
              placeholder="Phone number"
            />
          </div>
        </div>
      </form>
      <section className={styles.totalPrice}>
        <p className={styles.price}>
          Total Price <span>{totalPrice + '$'} </span>
        </p>
      </section>
      <Button>{'ordert'}</Button>
    </div>
  );
};
