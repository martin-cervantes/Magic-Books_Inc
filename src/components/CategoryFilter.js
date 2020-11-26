import React from 'react';
import { categories } from '../store/init';

export default function CategoryFilter(props) {
  return (
    <div>
      <select name="filter" onChange={props.handleFilterChange}>
        <option value="All" key="All">All</option>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}
