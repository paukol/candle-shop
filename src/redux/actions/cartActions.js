import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty, request) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:8000/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      title: data.title,
      photo: data.photo,
      price: data.price,
      description: data.description,
      shortDesc: data.shortDesc,
      addPhoto1: data.addPhoto1,
      addPhoto2: data.addPhoto2,
      addPhoto3: data.addPhoto3,
      countInStock: data.countInStock,
      qty,
      request: '',
    },
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const adjustItemRequest = (id, request) => {
  return {
    type: actionTypes.ADJUST_ITEM_REQUEST,
    payload: {
      product: id,
      request,
    },
  };
};


export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};