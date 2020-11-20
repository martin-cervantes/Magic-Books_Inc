import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ data, removeBook }) {
  const { bookId, title, category } = data;

  return (
    <tr>
      <td>{bookId}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          type="button"
          onClick={() => removeBook(data)}
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
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
