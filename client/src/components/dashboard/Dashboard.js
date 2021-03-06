import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Sidebar from "../layout/Sidebar";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { logoutUser } from '../../actions/authActions';
import MixedBarChart from '../charts/mixStackedBarChart';
import  LineChart from '../charts/lineChart';
import "./Dashboard.css"
import Users from '../Users/Users';

class Dashboard extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
  }
  componentWillReceiveProps(nextProps) {
  }
  componentWillMount(){
  }
  onChange = (e) => {
  }
  render() {
      let content;
      if(this.props.sidebar_states.type==="setting"){
        content = (<div className="chart-board">
                      <div className="barChart">
                        <MixedBarChart />
                      </div>
                      <div className="lineChart">
                        <LineChart/>
                      </div>
                    </div>);
      } else {
        content = (<div className="chart-board">
                      <div className="barChart">
                        <Users/>
                      </div>
                    </div>)
      }
      return (
        <div className="dashboard">
          <Navbar/>
          <Sidebar/>
          {content}
          <Footer/>
        </div>
      );
    }
  }

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  sidebar_states: PropTypes.object.isRequired,
  errors: PropTypes.object,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  sidebar_states: state.sidebar_states,
});
export default connect(mapStateToProps,{logoutUser})(
  Dashboard
);