import React from "react";
import classnames from 'classnames';
import styles from './styles.module.css';
import intorImg from './img/img.webp';
import intorImgMobile from './img/imgMobile.webp';

export const SectionHero = ({className}) => {

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
     </section>
   );
}