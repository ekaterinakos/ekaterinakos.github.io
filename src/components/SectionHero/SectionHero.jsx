import React from "react";
import classnames from 'classnames';
import styles from './styles.module.css';
import intorImg from './img/desktop.webp';
import intorImgMobile from './img/mobile.webp';
import { useWindowScroll } from '../../hooks/useWindowScroll';

import AnchorLink from 'react-anchor-link-smooth-scroll';

export const SectionHero = ({className}) => {
  const { sticky } = useWindowScroll();


   return (
     <section className={classnames(styles.root, className)}>
       <picture className={styles.picture}>
         <source
           media="(max-width: 767px)"
           srcSet={`${intorImgMobile} 767w`}
           sizes="767px"
         />
         <source
           media="(min-width: 768p)x"
           srcSet={`${intorImg} 768w`}
           sizes="768px"
         />
         <img src={intorImg} alt="img" />
       </picture>

       <AnchorLink
         offset="79"
         href="#newDesserts"
         className={classnames(styles.button, className, {
           [styles.hidden]: sticky.isSticky,
         })}
       >
         &#8659;
       </AnchorLink>
     </section>
   );
}