import React from 'react';
import Header from '../containers/Header';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div>
      <Header />
      <BooksList />
      <BooksForm />
    </div>
  );
}
