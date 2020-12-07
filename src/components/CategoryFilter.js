import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../store/init';

export default function CategoryFilter({ handleFilterChange }) {
  return (
    <div>
      <select className="filter" name="filter" onChange={e => handleFilterChange(e)}>
        <option value="All" key="All">All</option>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
