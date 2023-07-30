import React, { useContext } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import logo from './img/logo.svg';
import introImg from './img/foto.png';
import introImgWebp from './img/foto.webp';
import intorImgMobileWebp from './img/imgMobile.webp';
import intorImgMobileTablet from './img/imgMobileTablet.webp';
import { useWindowScroll } from '../../hooks/useWindowScroll';
import IconDown from './img/stat_minus_3.svg';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../ThemeContextProvider/ThemeContext';

export const SectionHero = ({ className }) => {
  const { sticky } = useWindowScroll();
    const { theme } = useContext(ThemeContext);

  return (
    <section
      className={classnames(
        className,
        styles.root,
        theme === 'default' ? styles.dark : 'default'
      )}
    >
      <div className={styles.intro}>
        <div className={styles.text}>
          <div className={styles.logo}>
            <img className={styles.logo} src={logo} alt="img" />
          </div>

          <h1 className={styles.title}>Home Bakery & Pastry</h1>
          <p>
            Mila’s Cake has a wide range of ingredients, serving the needs of
            our customers active in various bakery categories.
          </p>
        </div>
        <picture className={styles.foto}>
          <AnchorLink
            offset="0"
            href="#cakes"
            className={styles.cakesLinkConteiner}
          >
            <p className={styles.cakes}>cakes</p>
          </AnchorLink>
          <AnchorLink
            offset="0"
            href="#breads"
            className={styles.breadsLinkConteiner}
          >
            <p className={styles.breads}>breads</p>
          </AnchorLink>
          <AnchorLink
            offset="0"
            href="#pastries"
            className={styles.pastriesLinkConteiner}
          >
            <p className={styles.pastries}>pastries</p>
          </AnchorLink>
          <source
            media="(max-width: 1100px)"
            srcSet={`${intorImgMobileTablet} 1100w`}
            sizes="1100px"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${intorImgMobileWebp} 767w`}
            sizes="767px"
          />
          <img src={introImgWebp} alt="img" />
        </picture>
      </div>

      <AnchorLink
        offset="0"
        href="#newDesserts"
        className={classnames(styles.button, className, {
          [styles.hidden]: sticky.isSticky,
        })}
      >
        <img src={IconDown} alt="IconDown" />
      </AnchorLink>
    </section>
  );
};
