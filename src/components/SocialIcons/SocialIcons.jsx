import React from 'react';
import { SocialIcon } from '../SocialIcon/SocialIcon';
import Vk from './img/vk.svg';
import Facebook from './img/facebook.svg';
import Insta from './img/insta.svg';
import styles from './styles.module.css'
import classnames from 'classnames';

export const SocialIcons = ({className}) => {
  const icon = [Vk, Facebook, Insta];
  return (
    <div className={classnames(styles.root, className)}>
      {icon.map((item, index) => (
        <SocialIcon
          className={styles.icon}
          key={index}
          img={item}
          text="social icon"
          link={'./'}
        />
      ))}
    </div>
  );
};
