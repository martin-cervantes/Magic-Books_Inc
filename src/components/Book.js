import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ data, removeBook }) {
  const {
    bookId,
    author,
    title,
    category,
    progress,
    chapter,
  } = data;

  return (
    <tr>
      <td>{bookId}</td>
      <td>{author}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{progress}</td>
      <td>{chapter}</td>
      <td>
        <button
          type="button"
          onClick={() => removeBook(bookId)}
        >
          Remove Book
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
