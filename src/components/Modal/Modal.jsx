import React from 'react';
import { Button } from '../Button/Button';
import classnames from 'classnames';
import styles from './styles.module.css';

export const Modal = ({ title, children, className, active, setActive }) => {
  return (
    <div className={classnames(className, styles.modal, active? styles.active :styles.modal )}>
      <div className={styles.modalContent}>
        <Button className={styles.button}
          onClick={() => {
            setActive(false);
          }}
          children={'X'}
        />
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};
