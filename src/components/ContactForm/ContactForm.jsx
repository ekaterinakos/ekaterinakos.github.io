import React from 'react';
import { Button } from '../Button/Button';
import classnames from 'classnames';
import styles from './styles.module.css';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import { useReducer } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

const initialState = {
  name: '',
  location: '',
  email: '',
  phone: '',
  text: '',
};

const FormActions = {
  name: 'setName',
  location: 'setLocation',
  email: 'setEmail',
  phone: 'setPhone',
  text: 'setText',
};

const reducer = (state, action) => {

  switch (action.type) {
    case FormActions.name: {
      return {
        ...state,
        name: action.payload,
        email: '',
        text: '',
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
    case FormActions.text: {
      return {
        ...state,
        text: action.payload,
      };
    }
    default:
      return state;
  }
};

export const ContactForm = () => {
  const [modal, setModal] = useState();
  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Modal active={modal} setActive={setModal}>
        <fieldset className={styles.root}>
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
            <ReactTextareaAutosize
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
            <Button className={styles.buttonSand}>{'send'}</Button>
          </form>
        </fieldset>
      </Modal>
      <Button className={styles.button} onClick={setModal}>
        {'contact us'}
      </Button>
    </>
  );
};
