import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import clsx from 'clsx';
import { OrderItem } from '../OrderItem/OrderItem';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { addOneOrder } from '../../../redux/actions/orderActions';



import styles from './OrderSummary.module.scss';

const Component = ({className, cart, addNewOrder}) => {
  const elemsForCart = cart.map((item) => {
    return {
      name: item.title,
      price: item.price,
      qty: item.qty,
      request: item.request,
    };
  });
  const getCartSubTotal = () => {
    return cart
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  const [order, setOrder] = useState(
    {
      id: '',
      cart: elemsForCart,
      totalPrice: getCartSubTotal(),
      name: '',
      surname: '',
      address: '',
      email: '',
    }
  );

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const getCartCount = () => {
    return cart.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  
  const submitForm = (e) => {
    e.preventDefault();
    if(order.cart && order.name && order.surname && order.address && order.email){
      order.id = uuidv4();
      addNewOrder(order);
      alert('Order has been saved!');

      setOrder({
        id: '',
        name: '',
        surname: '',
        address: '',
        email: '',
      });
    } else {
      alert('Please fill required fields');
    }
  };
  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.cart}>
        {cart.length === 0 ? (
          <div className={styles.cart__linkBox}>
              Your Cart Is Empty <Link to="/" className={styles.cart__link}>Go Back</Link>
          </div>
        ) : (
          <div className={styles.cart__items}>
            {cart.map((item) => (
              <OrderItem key={item.product} item={item} />
            ))}
          </div>
        )}
        <div className={styles.cart__summary}>
          <h4 className={styles.summary__title}>Order Summary</h4>
          <div className={styles.summary__price}>
            <span>TOTAL: ({getCartCount()}) items</span>
            <span>$ {getCartSubTotal()}</span>
          </div>
        </div>
      </div>
      <div className={styles.formPart}>
        {cart.length === 0 ? (
          <div>
            <></>
          </div>
        ) : (
          <form className={styles.addForm} action="/orders" method="POST" onSubmit={submitForm}>
            <label>Name</label>
            <input className={styles.formInput} type="text" name="name" onChange={handleChange}></input>
            <label>Surname</label>
            <input className={styles.formInput} type="text" name="surname" onChange={handleChange}></input>
            <label>Address</label>
            <input className={styles.formInput} type="text" name="address" onChange={handleChange}></input>
            <label>Email</label>
            <input className={styles.formInput} type="email" name="email" onChange={handleChange}></input>
            <button className={styles.checkoutBtn} type="submit">Send order</button>
          </form>
        )}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
  addNewOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  addNewOrder: (newOrder) => dispatch(addOneOrder(newOrder)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as OrderSummary,
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};