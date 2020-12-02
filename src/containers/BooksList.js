import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

function BooksList({ books, filter, removeBook }) {
  const handleRemoveBook = (book => removeBook(book));

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books
            .filter(book => (filter === 'All' ? true : book.category === filter))
            .map(book => <Book key={book.bookId} data={book} removeBook={handleRemoveBook} />)
        }
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: bookToRemove => {
    dispatch(removeBook(bookToRemove));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
