import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnimatedBg from "react-animated-bg";
// import $ from 'jquery';
import { logoutUser } from '../../actions/authActions';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  componentDidMount = async()=>{
  }
  componentWillReceiveProps(nextProps) {
  }
  componentWillMount(){
  }
  onChange = (e) => {
  }
  render() {
    const imagesList = [
      'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_5343.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
    ];
      return (
        <AnimatedBg
        colors={["pink", "green", "black"]}
        duration={5}
        delay={1}
        timingFunction="linear"
        randomMode
      >
        <h2>Random mode</h2>
        <p>Next background will be choosen randomly.</p>
      </AnimatedBg>
      );
    }
  }

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
  userinfo: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  sidemaps: state.sidemaps,
  errors: state.errors,
  userinfo: state.userinfo
});

export default connect(mapStateToProps,{logoutUser})(
  Dashboard
);