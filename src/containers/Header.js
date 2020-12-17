import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions';

import user from '../img/user.png';

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
        <div className="left">
          <div className="brand">Bookstore CMS</div>
          <div className="title">BOOKS</div>
          <CategoryFilter handleFilterChange={this.handleFilterChange} />
        </div>
        <div className="right">
          <img className="user" src={user} alt="User" title="User" />
        </div>
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
