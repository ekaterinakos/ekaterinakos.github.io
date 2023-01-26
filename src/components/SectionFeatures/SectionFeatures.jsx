import React from "react"
import styles from './styles.module.css'
import classnames from 'classnames'
import { ReactComponent as BreadIcon } from './img/iconBread.svg';
import { ReactComponent as CakeIcon } from './img/iconCake.svg'
import {ReactComponent as BakeIcon} from './img/iconBake.svg'

export const SectionFeatures = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Bakery and Patisserie</h2>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <span>
            <BreadIcon />
          </span>
          <p className={styles.text}>
            Fresh and natural products <br /> only
          </p>
        </div>
        <div className={styles.item}>
          <span>
            <CakeIcon />
          </span>
          <p className={styles.text}>
            Large assortment of bakery <br /> and pastry products
          </p>
        </div>
        <div className={styles.item}>
          <span>
            <BakeIcon />
          </span>
          <p className={styles.text}>
            Only proven and tested <br /> recipes
          </p>
        </div>
      </div>
    </section>
  );
};