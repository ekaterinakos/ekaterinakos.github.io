import React from 'react';
import { Button } from '../Button/Button';
import IconDarkMode from './img/dark_mode.svg';
import styles from './styles.module.css';
import classnames from 'classnames';
import { useWindowScroll } from '../../hooks/useWindowScroll';

export const Theme = ({ onClick, className }) => {
  const { sticky } = useWindowScroll();
  return (
    <Button
      onClick={onClick}
      className={classnames(styles.button, styles.root, className, {
        [styles.sticky]: sticky.isSticky,
      })}
    >
      {<img src={IconDarkMode} alt="IconDarkMode" />}
    </Button>
  );
};
