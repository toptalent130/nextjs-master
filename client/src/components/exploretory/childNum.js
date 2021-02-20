import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUserInfo, updateUserInfo, getUserInfo } from '../../actions/userinfoAction';
import TextFieldGroup from '../common/TextFieldGroup';

class ChildNum extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() { 
    this.props.getUserInfo({userid:this.props.auth.user.id});
  }
  componentWillReceiveProps(nextProps) {
      const {userinfo} = nextProps;
      if( userinfo.chnum > 0){
        this.props.history.push('/basicquestions');
      }
  }
  onSubmit(e) {
    e.preventDefault();
    let tem = [];
    for(let i=0; i<this.state.chnum; i++){
      tem.push({firstname:'',middlename:'',lastname:'',sex:'male',birthday:'',house_number:'',street:'',city:'Abbeville',state:'Alabama',zip:''});
    };
    const data = {
      chnum: this.state.chnum,
      children: tem,
      userid: this.props.auth.user.id
    }
    this.props.updateUserInfo(data);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row mt-9">
            <div className="col-md-8 m-auto text-center">
              <h1 style={{fontSize:'30px',color:'black'}}>
                How many children do you want to enroll?
              </h1>
              <br/>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="ex:1"
                  name="chnum"
                  type="Number"
                  value={this.state.chnum || ''}
                  onChange={this.onChange}
                  min = {1}
                  max = {5}
                  required = {true}
                />
                <input type="submit" value="Continue" className="btn btn-info btn-block mt-4 mb-5" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChildNum.propTypes = {
  createUserInfo: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userinfo: PropTypes.object.isRequired, 
};

const mapStateToProps = state => ({
  auth: state.auth,
  userinfo: state.userinfo
});

export default connect(mapStateToProps, {createUserInfo, updateUserInfo, getUserInfo})(ChildNum);
