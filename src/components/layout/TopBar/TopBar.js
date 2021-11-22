import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';

import styles from './TopBar.module.scss';
//import { Link } from 'react-router-dom';

const Component = ({className, cart}) => {
  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.rightBar}>
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        <h2>LOG IN</h2>
        <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
        <Link className={styles.cartLink} to="/cart">
          <h2>CART ({getCartCount()})</h2>
        </Link>
      </div>
    </div>
  );
};

Component.propTypes = {
  cart: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: state.cart.cartItems,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as TopBar,
  Container as TopBar,
  Component as TopBarComponent,
};