import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing text-light text-center">
        <div className="landing-inner">
          <h1 className="display-4 mb-4 mt-5">PreSchool Admission System</h1>
          <p className="lead">
            {' '}
            Genius Kids Infant, Preschool, Pre-K & School Age
          </p>
          <hr />
          <Link to="/register" className="btn btn-lg btn-info mr-2">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-lg btn-info ml-4">
            Sign In
          </Link>
        </div>
    </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
