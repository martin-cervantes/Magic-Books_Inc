import React from 'react';

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
        <td>1</td>
        <td>Five Weeks in a Balloon</td>
        <td>Novel</td>
      </tbody>
    </table>
  );
}
