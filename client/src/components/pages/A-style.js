import React, { Component } from 'react';
import ALic9221 from './ALic9221';
class Astyle extends Component{
    render(){
        const { id } = this.props;
        const { data } = this.props;
        return (<div id={id} className="A4-book">
                <p>Genius Child less than 2 Years</p>
                <br/>
                <ALic9221 child={data}/>
            </div>)
    }
}
export default Astyle
