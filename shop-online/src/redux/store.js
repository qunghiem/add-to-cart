import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Chú ý: import { thunk } thay vì import thunk
import rootReducer from './reducers';

// Sử dụng Redux DevTools nếu có sẵn
const enhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
  : applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  enhancer
);

export default store;