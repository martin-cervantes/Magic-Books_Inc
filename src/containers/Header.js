import React from 'react';
import CategoryFilter from '../components/CategoryFilter';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    event.preventDefault();

    this.props.filterBooks(event.target.value);
  }

  render() {
    return (
      <header>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
      </header>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  filterBooks: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(null, mapDispatchToProps)(Header);
