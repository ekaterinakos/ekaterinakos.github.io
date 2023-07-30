import React  from 'react';
import { HeaderElements } from '../HeaderElements/HeaderElements';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider/ThemeContext';

export const Header = ({className}) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <header
      className={classnames(
        className,
        styles.root,
        theme === 'default' ? styles.dark : 'default'
      )}
    >
      <div className={styles.emptyConteiner}></div>
      <div className={styles.conteiner}>
          <HeaderElements />
      </div>
    </header>
  );
};
