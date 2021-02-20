import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUserInfo, updateUserInfo } from '../../actions/userinfoAction';
import TextFieldGroup from '../common/TextFieldGroup';
// import countryList from 'react-select-country-list';
import csc from 'country-state-city';
// import {UsaStates} from 'usa-states';
import DynamicSelectGroup from '../common/DynamicSelectGroup';


class ParentInfo extends Component {
  constructor() {
    super();
    this.state = {
      guadian_firstname:'',
      guadian_lastname:'',
      business_phone_number:'',
      home_phone_number:'',
      state:'Alabama',
      street:'',
      city:'Abbeville',
      zip:'',
      house_number:'',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() { 
    this.props.createUserInfo({userid:this.props.auth.user.id});
  }
  componentWillReceiveProps(nextProps) {
      const {userinfo} = nextProps;
      if( userinfo.guadian_firstname){
        this.props.history.push('/childnum');
      }
  }
  onSubmit(e) {
    e.preventDefault();
    const data = {
    //   chnum: chnum,
        ...this.state,
        userid: this.props.auth.user.id
    }
    this.props.updateUserInfo(data);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const countryCode = 'US';
    let citynames=[];
    const country = csc.getCountryByCode(countryCode);
    const states = csc.getStatesOfCountry(country.isoCode);
    const statenames = states.map((state)=>{
      if(state.name === this.state.state)
        {
          citynames = csc.getCitiesOfState(countryCode, state.isoCode).map((city)=>{
            return city.name;
          });
          if(citynames.length){
            this.state.city = citynames[0];
          }
        }
      return state.name;
    })
    return (
      <div className="login">
        <div className="container">
          <div className="row mt-9">
            <div className="m-auto text-center">
                <p style={{fontSize:'30px',color:'black'}}>
                    Please enroll Parent/Guadian's personal info?
                </p>
                <br/>
                <form className="row" onSubmit={this.onSubmit}>
                    <div className="m-auto card" style={{overflow:"right", padding:"10px 20px"}}>
                        <h2 className="">Parent/Guadian name</h2><br/>
                        <div className="input-group" style={{width:"100%"}}>
                            <div style={{width:"310px",marginRight:"10px", overflow:"right"}}>
                                <TextFieldGroup
                                placeholder="first Name"
                                name={"guadian_firstname"}
                                type="text"
                                value={this.state.guadian_firstname}
                                onChange={this.onChange}
                                required = {true}
                                />
                            </div>
                            <div style={{width:"310px"}}>
                                <TextFieldGroup
                                placeholder="last Name"
                                name={"guadian_lastname"}
                                type="text"
                                value={this.state.guadian_lastname}
                                onChange={this.onChange}
                                required = {true}
                                />
                            </div>
                        </div>
                        <div className="input-group" style={{width:"100%"}}>
                            <div style={{width:"310px",marginRight:"10px", overflow:"right"}}>
                                <TextFieldGroup
                                placeholder="Business/Mobile phone number"
                                name={"business_phone_number"}
                                type="text"
                                value={this.state.business_phone_number}
                                onChange={this.onChange}
                                required = {true}
                                />
                            </div>
                            <div style={{width:"310px"}}>
                                <TextFieldGroup
                                placeholder="home phone number"
                                name={"home_phone_number"}
                                type="text"
                                value={this.state.home_phone_number}
                                onChange={this.onChange}
                                required = {true}
                                />
                            </div>
                        </div>
                        <h2 className="">Address</h2><br/>
                        <div className="input-group" style={{width:"100%"}}>
                            <div style={{width:"98px",marginRight:"10px", overflow:"right"}}>
                                <TextFieldGroup
                                placeholder="house num"
                                name={"house_number"}
                                type="text"
                                value={this.state.house_number}
                                onChange={this.onChange}
                                required = {true}
                                />
                            </div>
                            <div style={{width:"118px",marginRight:"10px", overflow:"right"}}>
                                <TextFieldGroup
                                placeholder="street"
                                name={"street"}
                                type="text"
                                value={this.state.street}
                                onChange={this.onChange}
                                required = {true}
                                />
                            </div>
                            <div style={{width:"138px",marginRight:"10px", overflow:"right"}}>
                                <DynamicSelectGroup
                                placeholder="city"
                                name={"city"}
                                options={citynames}
                                value={this.state.city}
                                onChange={this.onChange}
                                required = {false}
                                />
                            </div>
                            <div style={{width:"98px",marginRight:"10px", overflow:"right"}}>
                                <TextFieldGroup
                                placeholder="zip"
                                name={"zip"}
                                type="text"
                                value={this.state.zip}
                                onChange={this.onChange}
                                required = {true}
                                min={5}
                                />
                            </div>
                            <div style={{width:"138px"}}>
                                <DynamicSelectGroup
                                placeholder="state"
                                name={"state"}
                                options={statenames}
                                value={this.state.state}
                                onChange={this.onChange}
                                required = {true}
                                />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Continue" style={{margin:"0 8%"}} className="btn btn-info btn-block mt-4 mb-5" />
                </form>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

ParentInfo.propTypes = {
  createUserInfo: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userinfo: PropTypes.object.isRequired, 
};

const mapStateToProps = state => ({
  auth: state.auth,
  userinfo: state.userinfo
});

export default connect(mapStateToProps, {createUserInfo, updateUserInfo})(ParentInfo);
