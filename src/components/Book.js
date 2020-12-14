import React from 'react';
import PropTypes from 'prop-types';

import circularProgress from '../img/circular-progress.png';

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
        <div>
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

        <div className="progress-container">
          <img className="circular-progress-bar" src={circularProgress} alt="74%" />

          <div className="progress-info">
            <p className="percentage">
              {progress}
              <spam>%</spam>
            </p>

            <p className="progress-label">Completed</p>
          </div>
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
