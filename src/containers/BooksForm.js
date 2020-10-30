import React from 'react';

export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <input type="text" id="title" name="title" placeholder="Enter book title" />

      <select id="category" name="category">
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>

      <button type="submit">Save Book</button>
    </form>
  );
}
