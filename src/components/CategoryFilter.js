import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../store/init';

const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <select className="filter" name="filter" onChange={(e) => handleFilterChange(e)}>
      <option value="All" key="All">All</option>
      {categories.map((category) => (
        <option value={category} key={category}>{category}</option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
