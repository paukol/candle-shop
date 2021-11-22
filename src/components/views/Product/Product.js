import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getProductDetails } from '../../../redux/actions/productActions';
import { addToCart } from '../../../redux/actions/cartActions';


import styles from './Product.module.scss';

const Component = ({className, one, getProductDetails, error, loading, addToCart, history}) => {
  const [qty, setQty] = useState(1);
  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);
  const addToCartHandler = () => {
    addToCart(one._id, qty);
    history.push(`/cart`);
  };
  return (
    <div className={clsx(className, styles.root)}>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.postBox}>
              <p className={styles.title}>{one.title}</p>
              <img className={styles.image} src={one.photo} alt="Product one"></img>
              <p className={styles.price}>${one.price}</p>
            </div>
            <div className={styles.imagesBox}>
              <img className={styles.addPhoto} src={one.addPhoto1} alt="Product"></img>
              <img className={styles.addPhoto} src={one.addPhoto2} alt="Product"></img>
              <img className={styles.addPhoto} src={one.addPhoto3} alt="Product"></img>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h2>PRODUCT DESCRIPTION</h2>
            <p>{one.description}</p>
            <p>In stock: {one.countInStock}</p>
            <p>
                Quantity: 
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(one.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </p>
            <button className={styles.button} onClick={addToCartHandler}>ADD TO CART</button>
          </div>
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  one: PropTypes.object,
  className: PropTypes.string,
  getProductDetails: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
  addToCart: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  one: state.getProductDetail.product,
  loading: state.getProducts.loading,
  error: state.getProducts.error,
});

const mapDispatchToProps = (dispatch, props) => ({
  getProductDetails: () => dispatch(getProductDetails(props.match.params.id)),
  addToCart: (id, qty) => dispatch(addToCart(props.match.params.id, qty)), 
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};