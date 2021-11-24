import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './LogoBar.module.scss';

const Component = ({className}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.overlay}>
        <h2 className={styles.title}>CANDLE STORE</h2>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};


export {
  Component as LogoBar,
  // Container as Logo,
  Component as LogoBarComponent,
};