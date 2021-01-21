import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUserInfo, updateUserInfo } from '../../actions/userinfoAction';
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
    this.props.createUserInfo({userid:this.props.auth.user.id});
  }
  componentWillMount() {
    if(this.props.userinfo.chnum > 0)
    {
      this.props.history.push('/basicquestions');
    }
  }
  componentWillReceiveProps(nextProps) {
      const {userinfo} = nextProps;
      if( userinfo.chnum > 0){
        this.props.history.push('/basicquestions');
      }
  }
  onSubmit(e) {
    e.preventDefault();
    const data = {
      chnum: this.state.chnum,
      userid: this.props.auth.user.id
    }
    this.props.updateUserInfo(data);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="login dark-overlay">
        <div className="container">
          <div className="row mt-9">
            <div className="col-md-8 m-auto text-center">
              <p style={{fontSize:'30px',color:'white'}}>
                How many childs do you want to enroll?
              </p>
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
  auth: PropTypes.object.isRequired,
  userinfo: PropTypes.object.isRequired, 
};

const mapStateToProps = state => ({
  auth: state.auth,
  userinfo: state.userinfo
});

export default connect(mapStateToProps, {createUserInfo, updateUserInfo})(ChildNum);
