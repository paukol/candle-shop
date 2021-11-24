import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import clsx from 'clsx';

import styles from './NavBar.module.scss';

const Component = ({className}) => (
  <nav className={clsx(className, styles.root)}>
    <NavLink to='/home'className={styles.navLink}>Home</NavLink>
  </nav>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NavBar,
  // Container as NavBar,
  Component as NavBarComponent,
};