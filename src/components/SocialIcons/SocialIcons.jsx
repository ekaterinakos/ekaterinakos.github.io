import React from 'react';
import styles from './styles.module.css'
import classnames from 'classnames';
import { Svg } from '../Svg/Svg';

export const SocialIcons = ({className}) => {

  return (
    <div className={classnames(styles.root, className)}>
      <Svg className={styles.icon} icon="facebook" width={13} fill="#cd5c5c" />
      <Svg className={styles.icon} icon="vk" width={8} fill="#cd5c5c" />
      <Svg className={styles.icon} icon="insta" width={10} fill="#cd5c5c" />
    </div>
  );
};
