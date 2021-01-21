import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { updateUserInfo } from '../../actions/userinfoAction';

class BasicQuestions extends Component {
  constructor() {
    super();
    this.state = {
      common: true,
      children:[],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 componentDidMount() {
    this.setState({...this.props.userinfo,...this.state});
  }
  componentWillMount() {
    if(this.props.userinfo.common === true)
    {
      this.props.history.push('/dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.userinfo.common === true)
    {
      this.props.history.push('/dashboard');
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.updateUserInfo(this.state);
  }

  onChange(e,i) {
    const { children } = this.state;
    children[i][e.target.name] = e.target.value;
    this.setState({children:children});
  }

  render() {
    let tem=[];
    let len = this.state.chnum;
    for(let i=0; i<len; i++){
      tem.push(i);
    };
    if(!this.state.children.length){
      for(let i=0; i<this.props.userinfo.chnum; i++){
        this.state.children.push({});
      };
    }
    let multipanel = tem.map((i)=> {
      return <div key={i} className="m-auto" style={{overflow:"right"}}>
        <h1 className="text-light">{i+1} Child</h1><br/>
        <div className="input-group" style={{width:"100%"}}>
          <div style={{width:"150px",marginRight:"10px", overflow:"right"}}>
              <TextFieldGroup
              placeholder="first Name"
              name={"firstname"}
              type="text"
              value={this.state.children[i]['firstname'] || ''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
          <div style={{width:"150px",marginRight:"10px", overflow:"right"}}>
              <TextFieldGroup
              placeholder="middle Name"
              name={"middlename"}
              type="text"
              value={this.state.children[i]['middlename'] || ''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
          <div style={{width:"150px"}}>
              <TextFieldGroup
              placeholder="last Name"
              name={"lastname"}
              type="text"
              value={this.state.children[i]['lastname'] || ''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
        </div>
        <TextFieldGroup
        placeholder="age"
        name={"age"}
        type="number"
        value={this.state.children[i]['age'] || ''}
        onChange={(e)=>{this.onChange(e,i)}}
        required = {true}
        min = {0}
        max = {30}
        />
        <TextFieldGroup
        placeholder="birthday"
        name={"birthday"}
        type="date"
        value={this.state.children[i]['birthday'] || ''}
        onChange={(e)=>{this.onChange(e,i)}}
        required = {true}
        />
        <TextFieldGroup
        placeholder="address"
        name={"address"}
        type="text"
        value={this.state.children[i]['address'] || ''}
        onChange={(e)=>{this.onChange(e,i)}}
        required = {true}
        />
      </div>
    })
    return (
      <div className="login dark-overlay">
        <div className="container">
          <div className="row mt-9">
            <div className="m-auto text-center">
                <p style={{fontSize:'30px',color:'white'}}>
                    What is your children's Information?
                </p>
                <br/>
                <form className="row m-auto" onSubmit={this.onSubmit}>
                    {multipanel}
                    <input type="submit" value="Continue" style={{margin:"0 8%"}} className="btn btn-info btn-block mt-4 mb-5" />
                </form>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

BasicQuestions.propTypes = {
  updateUserInfo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userinfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  userinfo: state.userinfo
});

export default connect(mapStateToProps, { updateUserInfo })(BasicQuestions);
