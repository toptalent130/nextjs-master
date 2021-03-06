import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import "./Sidebar.css"
import { sidebar_States } from '../../actions/sidebarActions';
class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      sidebar_states:{}
    }
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount = ()=>{
    this.props.sidebar_States();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({sidebar_states:nextProps.sidebar_states})
  }
  componentWillMount(){
    $(document).ready(()=>{
      $(".sidenavClose").click(()=>{
        $(".sideBar").css("margin-left","-300px");
        $(".chart-board").css("margin-left","0");
      })
      $(".sidenavOpen").click(()=>{
        $(".sideBar").css("margin-left","0px");
        if($(window).width() <= 1065){
          $(".chart-board").css("margin-left","0px");
        } else {
          $(".chart-board").css("margin-left","300px");
        }
      });
    })
  }
  onChange = (e, type="setting") => {
    let state = this.state.sidebar_states;
    if(!e.target.name){
      state.type = type;
    } else if('wm_1w wm_1m wm_2m interest volume IV gender'.indexOf(e.target.name) >= 0) {
      state[e.target.name] = e.target.checked;
    } else {
      state[e.target.name] = e.target.value;
    }
    this.props.sidebar_States(state);
  }
  render() {
      let users;
      if(this.props.auth.user.name==="superadmin"){
        users = (<div type="button" className="item" onClick={(e)=>this.onChange(e, "user")}><i className="fa fa-users"></i> Users</div>);
      }
      return (
        <div className="sideBar">
            <div className="sidenav">
                <button className="btn sidenavClose"><i className="fas fa-angle-left" style={{fontSize:"24px"}}></i></button>
                <div className="sidenavHeader">
                    <div><i className="fas fa-cogs" style={{color:"red"}}></i> SETTING</div>
                </div><hr/>
                <div className="items">
                  <div className="item" type="button" data-toggle="collapse" onClick={this.onChange} data-target="#demo1"><i className="fas fa-cog"></i> Spx Calls</div>
                  <div id="demo1" className="collapse in">
                    <div className="wm">
                      <input type="checkbox" id="1w" onChange={this.onChange} checked={this.state.sidebar_states.wm_1w||false} name="wm_1w"/>
                      <label htmlFor="1W">1W</label>
                      <input type="checkbox" onChange={this.onChange}  name="wm_1m" id="1M"/>
                      <label htmlFor="1M">1M</label>
                      <input type="checkbox"onChange={this.onChange}   name="wm_2m" id="2M"/>
                      <label htmlFor="2M">2M</label>
                    </div><hr/>
                    <div className="ovi">
                      <input type="checkbox" id="interest" name="interest"  checked={this.state.sidebar_states.interest||false} onChange={this.onChange}/>
                      <label htmlFor="interest">Open Interest</label><br/>
                      <input type="checkbox" onChange={this.onChange} name="volume" id="volume"/>
                      <label htmlFor="volume">Volume</label><br/>
                      <input type="checkbox" onChange={this.onChange} name="IV" id="IV"/>
                      <label htmlFor="IV">IV Percentile</label><br/>
                    </div><hr/>
                    <div className="nra">
                        &nbsp;Day Action<br/>
                        <input type="radio" name="gender" value="none"/> None
                        <input type="radio" name="gender" value="realized"/> Realized
                        <input type="radio" name="gender" value="all"/> All
                    </div><hr/>
                  </div>
                  <div className="item" type="button" data-toggle="collapse" onClick={this.onChange} data-target="#demo2"><i className="fa fa-cog"></i> More</div>
                  <div id="demo2" className="collapse in">
                  </div>
                  {users}
                </div>
            </div>
        </div>
      );
    }
  }
  
Sidebar.propTypes = {
  sidebar_States: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  sidebar_states: state.sidebar_states,
});
export default connect(mapStateToProps,{sidebar_States})(Sidebar);