import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider/ThemeContext';

export const Button = ({ onClick, children, className }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={classnames(
        className,
        theme === 'default' ? styles.dark : 'default',
        styles.root
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
