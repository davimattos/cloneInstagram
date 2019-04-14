import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';

const reducers = combineReducers({ user: userReducer });

const storeConfig = () => (
  createStore(reducers)
);

export default storeConfig;
