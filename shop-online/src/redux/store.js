import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Sử dụng Redux DevTools nếu có sẵn
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
  : applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  enhancer
);

export default store;