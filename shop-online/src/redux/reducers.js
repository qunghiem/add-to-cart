import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
} from './actions';

// Initial States
const productsInitialState = {
  products: [],
  loading: false,
  error: null,
};

const cartInitialState = [];

// Reducers
const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Nếu đã có, tăng số lượng
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu chưa có, thêm mới vào giỏ hàng
        return [...state, action.payload];
      }
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case UPDATE_CART_QUANTITY:
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;