import React, { Component } from 'react';
import CLic9221 from './CLic9221';
class Cstyle extends Component{
    render(){
        const { id } = this.props;
        const { data } = this.props;
        return (<div id={id} className="A4-book">
                <p className="text-center">Genius Child greater than 4.8 Years</p>
                <br/>
                <CLic9221 child={data}/>
            </div>)
    }
}
export default Cstyle
