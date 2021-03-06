import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
class ApexChart extends Component {
    constructor(){
      super();
      this.state = {
        series: [{
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4]
          },
          title: {
            text: 'SPX Calls'
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
          },
          labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
          xaxis: {
            type: 'datetime'
          },
          yaxis: [{
            title: {
              text: 'Website Blog',
            },
          
          }, {
            opposite: true,
            title: {
              text: 'Social Media'
            }
          }]
        },
        data:[
          {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
          },
          {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
          },
          {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
          },
          {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
          },
          {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Page H',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Page I',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
        ]
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
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={1430} height={350} />
        );
      }
    }
  
  ApexChart.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
  });
  
  export default connect(mapStateToProps)(
    ApexChart
  );