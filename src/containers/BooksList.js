import React from 'react';
import Book from '../components/Book';

export default function BooksList() {
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
        <Book data={{ bookId: 1, title: 'Five Weeks in a Balloon', category: 'Novel' }} />
      </tbody>
    </table>
  );
}
