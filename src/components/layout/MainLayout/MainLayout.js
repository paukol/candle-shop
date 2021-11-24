import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from '../TopBar/TopBar';
import {Footer} from '../Footer/Footer';
import clsx from 'clsx';


import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <main className={clsx(className, styles.root)}>
    <TopBar />
    {children}
    <Footer/>
  </main>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};