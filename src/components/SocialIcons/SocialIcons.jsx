import React from 'react';
import styles from './styles.module.css'
import classnames from 'classnames';
import { Svg } from '../Svg/Svg';

export const SocialIcons = ({className}) => {

  return (
    <div className={classnames(styles.root, className)}>
      <Svg className={styles.icon} icon="facebook" fill="#cd5c5c" />
      <Svg className={styles.icon} icon="vk"  fill="#cd5c5c" />
      <Svg className={styles.icon} icon="insta" fill="#cd5c5c" />
    </div>
  );
};
