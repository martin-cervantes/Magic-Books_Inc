import { createStore } from 'redux';
import bookReducer from '../reducers/books';
import initialState from './init';

const store = createStore(bookReducer, initialState);

export default store;
