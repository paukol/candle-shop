import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <footer className={clsx(className, styles.root)}>
      <div className={styles.footerBar}>
        <div className={styles.iconBar}>
          <a href="https://facebook.com">
            <FontAwesomeIcon className={styles.icon} icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a href="https://instagram.com">
            <FontAwesomeIcon className={styles.icon} icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon className={styles.icon} icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    <div className={styles.copyright}>
      <span>CANDLE STORE© 2021 </span>
    </div>
  </footer>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};