import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';

export const Contacts = ({ className }) => {
  return (
    <section className={classnames (className, styles.root) }>
      <p>
        Ludmila Galich <br /> <span>Pastry Chef</span>
      </p>
      <p>
        <a href="tel:+79268849529">+420-608-924-626</a>
      </p>
      <a href="mailto:info@milascake.com">info@milascake.com</a>
    </section>
  );
};
