import React  from 'react';
import { HeaderElements } from '../HeaderElements/HeaderElements';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider/ThemeContext';
import { useWindowScroll } from '../../hooks/useWindowScroll';

export const Header = () => {
  const { theme } = useContext(ThemeContext);
 const { sticky } = useWindowScroll();
  
  return (
    <header
      className={classnames(
        styles.root,
        {
          [styles.sticky]: sticky.isSticky,
        },
        theme === 'default' ? styles.dark : 'default'
      )}
    >
      <HeaderElements />
    </header>
  );
};
