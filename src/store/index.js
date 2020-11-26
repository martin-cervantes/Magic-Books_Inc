import { createStore } from 'redux';
import rootReducer from '../reducers/books';
import { initialState } from './init';

const store = createStore(rootReducer, initialState);

export default store;
