import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useState } from 'react';
import { Button } from '../Button/Button';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContextProvider/ThemeContext';

export const NavMenu = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const activeClass = ({ isActive }) =>
    classnames({
      [styles.active]: isActive,
    });

  const closeNav = () => {
    setOpen(false);
  };
  const ref = useOnclickOutside(closeNav);

  return (
    <nav
      ref={ref}
      className={classnames(className ,
        styles.nav,
        !open ? styles.navClosed : styles.navOpen
      )}
    >
      <Button
        onClick={() => setOpen(!open)}
        className={styles.toggleButton}
      ></Button>
      <ul
        onClick={closeNav}
        className={classnames(
          styles.list,
          theme === 'default' ? styles.dark : 'default'
        )}
      >
        <li className={className}>
          <NavLink className={activeClass} to="/">
            home
          </NavLink>
        </li>
        <li className={className}>
          <NavLink className={activeClass} to="/products">
            products
          </NavLink>
        </li>
        <li className={className}>
          <NavLink className={activeClass} to="/location">
            location
          </NavLink>
        </li>
        <li className={className}>
          <NavLink className={activeClass} to="/delivery">
            delivery
          </NavLink>
        </li>
        <li className={className}>
          <NavLink className={activeClass} to="/recipes">
            recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
