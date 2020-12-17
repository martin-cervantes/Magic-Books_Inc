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
      <form className="books-form" onSubmit={this.handleSubmit}>
        <h1 id="title">ADD NEW BOOK</h1>

        <div className="controls">
          <input
            name="title"
            className="form-input"
            type="text"
            placeholder="Enter book title"
            onChange={this.handleChange}
            required
          />

          <select className="form-select" name="category" onChange={this.handleChange}>
            {categories.map(category => (
              <option value={category} key={category}>{category}</option>
            ))}
          </select>

          <button className="form-button" type="submit">ADD BOOK</button>
        </div>
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
