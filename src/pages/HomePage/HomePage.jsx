import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { SectionNewDesserts } from '../../components/SectionNewDesserts/SectionNewDesserts';
import { SectionCakes } from '../../components/SectionCakes/SectionCakes';
import { SectionPastries } from '../../components/SectionPastries/SectionPastries';
import { SectionBreads } from '../../components/SectionBreads/SectionBreads';
import { SectionFeatures } from '../../components/SectionFeatures/SectionFeatures';
import { Reviews } from '../../components/Reviews/Reviews';

import { SectionHero } from '../../components/SectionHero/SectionHero';


export const HomePage = () => {

  return (
    <div className={classnames(styles.root)}>
      <SectionHero/>
      <SectionNewDesserts />
      <SectionFeatures />
      <SectionCakes />
      <SectionPastries />
      <SectionBreads />
      <Reviews />
    </div>
  );
};
