import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderItem.module.scss';

const Component = ({className, item}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cartItem}>
        <img
          className={styles.cartItem__image}
          src={item.photo}
          alt={item.title}
        />
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>Name: {item.title}</p>
          <p className={styles.details__desc}>Quantity: {item.qty}</p>
          <p className={styles.details__price}>Price: $ {item.price}</p>
          <p className={styles.details__price}>Additional request: {item.request}</p>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  item: PropTypes.object,
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
  Component as OrderItem,
  // Container as OrderItem,
  Component as OrderItemComponent,
};