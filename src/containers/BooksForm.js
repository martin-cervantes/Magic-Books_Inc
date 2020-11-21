import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import { categories } from '../store/init';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: categories[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { createBook } = this.props;

    createBook(this.state);

    this.setState({ title: '', category: categories[0] });
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter book title"
          onChange={this.handleChange}
          required
        />

        <select name="category" onChange={this.handleChange}>
          {categories.map(category => (
            <option value={category} key={category}>{category}</option>
          ))}
        </select>

        <button type="submit">Save Book</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: newBook => {
    dispatch(createBook(newBook));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
