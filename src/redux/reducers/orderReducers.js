import * as actionTypes from '../constants/orderConstants';

const ORDER_INITIAL_STATE = {
  orders: [],
};

export const orderReducer = (state = ORDER_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER: {
      return {
        ...state,
        orders: [...state.orders, action.payload ],
      };
    }
    default:
      return state;
  }
};