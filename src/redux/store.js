import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initState from './initState';
import currencyReducer from './reducers/currencyReducer';
import thunk from 'redux-thunk';

const store = createStore(
  currencyReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
