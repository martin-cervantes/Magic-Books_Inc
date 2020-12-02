import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    event.preventDefault();

    const { changeFilter } = this.props;

    changeFilter(event.target.value);
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
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

Header.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
