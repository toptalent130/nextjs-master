import React, { Component } from 'react';
import'./loading.css'

class Loader extends Component{
    render(){
        return (
        <div className="loader">
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--text"></div>
        </div>
        )
    }
}
  
export default Loader
