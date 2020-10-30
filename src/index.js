import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bookReducer from './reducers/books';

import './index.css';

import App from './components/App';

let bookIds = Math.ceil(Math.random() * 10000);

const bookTitles = [
  'The Da Vinci Code',
  'Steve Jobs',
  'The Crusades',
  'Tales of Terror and Madness',
  'Alice\'s Adventures in Wonderland ',
  'Unlimited Memory',
  'I, Robot',
];

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const books = [];

bookTitles.forEach((book, i) => {
  books.push({
    bookId: bookIds += 1,
    title: book,
    category: categories[i],
  });
});

const initialState = {
  books,
};

const store = createStore(bookReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
