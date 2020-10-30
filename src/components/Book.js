import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ data }) {
  const { bookId, title, category } = data;

  return (
    <tr>
      <td>{bookId}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};
