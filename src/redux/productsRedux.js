// import { initialState } from './initialState';
// /* selectors */



// /* action name creator */
// const reducerName = 'products';
// const createActionName = name => `app/${reducerName}/${name}`;

// /* action types */
// const FETCH_START = createActionName('FETCH_START');
// const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
// const FETCH_ERROR = createActionName('FETCH_ERROR');
// const ADD_TO_CART = createActionName('ADD_TO_CART');
// const ADJUST_ITEM_QTY = createActionName('ADJUST_ITEM_QTY');
// const ADJUST_ITEM_REQ = createActionName('ADJUST_ITEM_REQ');
// const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
// const LOAD_CURRENT_ITEM = createActionName('LOAD_CURRENT_ITEM');

// /* action creators */
// export const fetchStarted = payload => ({ payload, type: FETCH_START });
// export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
// export const fetchError = payload => ({ payload, type: FETCH_ERROR });
// export const addToCart = itemID => ({ payload: {id: itemID}, type: ADD_TO_CART});
// export const removeFromCart = itemID => ({ payload: {id: itemID}, type: REMOVE_FROM_CART});
// export const adjustItemQty = (itemID, qty)=> ({ payload: {id: itemID, qty}, type: ADJUST_ITEM_QTY });
// export const adjustItemReq = (itemID, request)=> ({ payload: {id: itemID, request}, type: ADJUST_ITEM_REQ });
// export const loadCurrentItem = item => ({ payload: item, type: LOAD_CURRENT_ITEM });


// /* thunk creators */

// /* reducer */
// export const reducer = (state = initialState, action={}) => {
//   switch (action.type) {
//     case ADD_TO_CART: {
//       // Get Item data from products array
//       // console.log(state);
//       const prod = state.products.find((product) => product.id === action.payload.id);
//       // Check if Item is in cart already
//       const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
//       alert('Product has been added to the cart');
//       return {
//         ...state,
//         cart: inCart
//           ? state.cart.map((item) =>
//             item.id === action.payload.id
//               ? { ...item, qty: item.qty + 1, request: '' }
//               : item
//           )
//           : [...state.cart, { ...prod, qty: 1, request: '' }],
//       };
//     }
//     case REMOVE_FROM_CART: {
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload.id),
//       };
//     }
//     case ADJUST_ITEM_QTY: {
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, qty: +action.payload.qty }
//             : item
//         ),
//       };
//     }
//     case ADJUST_ITEM_REQ: {
//       return {
//         ...state,
//         cart: state.cart.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, request: action.payload.request }
//             : item
//         ),
//       };
//     }
//     case LOAD_CURRENT_ITEM: {
//       return {
//         ...state,
//         currentItem: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };