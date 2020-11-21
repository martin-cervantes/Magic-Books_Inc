import React from 'react';
import { categories } from '../store/init';

export default function CategoryFilter() {
  return (
    <div>
      <select name="filter">
        <option value="All" key="All">All</option>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}
