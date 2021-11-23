import * as actionTypes from '../constants/orderConstants';
import axios from 'axios';
import { API_URL } from '../../config';

export const addOneOrder= (data) => {
  return (dispatch, getState) => {
    /*
    const fd = new FormData();
    for(const param in data) {
      fd.append(param, data[param]);
    }
    */
  
    axios
    .post(`${API_URL}/orders`, data)
      .then(() => {
        dispatch({
          type: actionTypes.ADD_ORDER,
          payload: {
            ...data,
          },
        });
      })
      .catch(err => {
        dispatch((err.message || true));
      });
  };
};