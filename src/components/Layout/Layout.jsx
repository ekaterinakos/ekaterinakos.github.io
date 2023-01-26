import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useContext } from 'react';
import { Header } from '../Header/Header';
import { Theme } from '../Theme/Theme';
import { ThemeContext } from '../ThemeContextProvider/ThemeContext';
import { Footer } from '../Footer/Footer';

export const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={classnames(
        styles.root,
        theme === 'default' ? styles.dark : 'default'
      )}
    >
      <Header />
      <Theme className={styles.button}
        onClick={() => setTheme(theme === 'default' ? 'dark' : 'default')}
      />
      <div
        className={classnames(
          styles.content,
          theme === 'default' ? styles.dark : 'default'
        )}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
