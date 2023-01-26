import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { Rating } from '../Rating/Rating';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { useReducer } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useEffect } from 'react';
import { useRef } from 'react';

const initialState = {
  name: '',
  email: '',
  text: '',
  rating: 5,
};

export const FormActions = {
  name: 'setName',
  email: 'setEmail',
  text: 'setText',
  rating: 'setRating',
};

const reducer = (state, action) => {
  switch (action?.type) {
    case FormActions.name: {
      return {
        ...state,
        name: action.payload,
        email: '',
        text: '',
        rating: 5,
      };
    }
    case FormActions.email: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case FormActions.text: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case FormActions.rating: {
      return {
        ...state,
        rating: action.payload,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};


export const ReviewForm = ({ className }) => {
  const [modal, setModal] = useState();
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Modal active={modal} setActive={setModal}>
        <fieldset className={classnames(className, styles.root)}>
          <form  className={styles.form}>
            <div className={styles.inputWrapper}>
              <input
                value={value.name}
                onChange={(event) =>
                  dispatch({
                    type: FormActions.name,
                    payload: event.target.value,
                  })
                }
                type="text"
                name="name"
                placeholder="Name"
                required
              />
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
                placeholder="Email"
                required
              />
            </div>
            <TextareaAutosize
              autoFocus
              className={styles.textarea}
              value={value.text}
              onChange={(event) =>
                dispatch({
                  type: FormActions.text,
                  payload: event.target.value,
                })
              }
              name="description"
              placeholder="..."
              required
            />
            <Rating
              value={value.rating}
              className={styles.rating}
              onChange={(event) => {
                dispatch({
                  type: FormActions.rating,
                  payload: event,
                });
              }}
            />
            <Button className={styles.buttonSand}>{'send'}</Button>
          </form>
        </fieldset>
      </Modal>
      <Button className={styles.button} onClick={setModal}>
        {'your review'}
      </Button>
    </>
  );
};
