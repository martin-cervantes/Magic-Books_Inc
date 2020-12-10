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
    <div className="book-container">
      <div className="book">
        <div className="book-info">
          <p className="book-category">{category}</p>
          <h1 className="book-title">{title}</h1>
          <p className="book-author">{author}</p>

          <div className="actions">
            <p className="action">Comments</p>

            <button
              className="action remove"
              type="button"
              onClick={() => removeBook(bookId)}
            >
              Remove Book
            </button>

            <p className="action">Edit</p>
          </div>
        </div>

        <div className="progress">
          {progress}
        </div>
      </div>

      <div className="chapter">
        {chapter}
        <button className="chapter-button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
