import React from 'react';
import Header from '../containers/Header';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div>
    <Header />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
