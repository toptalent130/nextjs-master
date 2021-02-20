import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import DynamicSelectGroup from '../common/DynamicSelectGroup';
import { updateUserInfo, getUserInfo } from '../../actions/userinfoAction';
// import countryList from 'react-select-country-list'
import csc from 'country-state-city'
// import { UsaStates } from 'usa-states';

class BasicQuestions extends Component {
  constructor() {
    super();
    this.state = {
      children:[],
      finish:false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    this.props.getUserInfo({userid:this.props.auth.user.id});
    // this.setState({...this.props.userinfo, common:true, children: this.props.userinfo.children});
  }
  componentWillReceiveProps(nextProps){
    if((nextProps.userinfo.children[0].firstname)||(this.state.finish === true)){
      this.props.history.push('/dashboard');
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.state.finish = true;
    this.state.userid = this.props.auth.user.id;
    this.props.updateUserInfo(this.state);
  }
  onChange(e,i) {
    const { children } = this.state;
    children[i][e.target.name] = e.target.value;
    this.setState({children:children});
  }
  render() {
    this.state.children = this.props.userinfo.children;
    let multipanel;
    if(this.state.children){
      multipanel = this.state.children.map((item, i)=> {
        const countryCode = 'US';
        let citynames = [];
        const country = csc.getCountryByCode(countryCode);
        const states = csc.getStatesOfCountry(country.isoCode);
        const statenames = states.map((state)=>{
          if(state.name === item.state)
            {
              citynames = csc.getCitiesOfState(countryCode, state.isoCode).map((city)=>{
                return city.name;
              });
              if(citynames.length){
                item.city = citynames[0];
              }
            }
          return state.name;
        })
      return <div key={i} className="m-auto card" style={{overflow:"right", padding:"10px 20px"}}>
        <h2 className="">Name</h2><br/>
        <div className="input-group" style={{width:"100%"}}>
          <div style={{width:"170px",marginRight:"10px", overflow:"right"}}>
              <TextFieldGroup
              placeholder="first Name"
              name={"firstname"}
              type="text"
              value={item.firstname||''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
          <div style={{width:"170px",marginRight:"10px", overflow:"right"}}>
              <TextFieldGroup
              placeholder="middle Name"
              name={"middlename"}
              type="text"
              value={item.middlename||''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {false}
              />
          </div>
          <div style={{width:"170px"}}>
              <TextFieldGroup
              placeholder="last Name"
              name={"lastname"}
              type="text"
              value={item.lastname||''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
        </div>
        <h2 className="">Sex/Birth</h2><br/>
        <div className="input-group" style={{width:"100%"}}>
          <div style={{width:"260px",marginRight:"10px", overflow:"right"}}>
            <DynamicSelectGroup
            placeholder="sex"
            name={"sex"}
            options={['male','female','other']}
            value={item.sex||''}
            onChange={(e)=>{this.onChange(e,i)}}
            required = {true}
            />
          </div>
          <div style={{width:"260px"}}>
            <TextFieldGroup
            placeholder="birthday"
            name={"birthday"}
            type="date"
            value={item.birthday||''}
            onChange={(e)=>{this.onChange(e,i)}}
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
              value={item.house_number||''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
          <div style={{width:"98px",marginRight:"10px", overflow:"right"}}>
              <TextFieldGroup
              placeholder="street"
              name={"street"}
              type="text"
              value={item.street||''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
          <div style={{width:"98px",marginRight:"10px", overflow:"right"}}>
              <DynamicSelectGroup
              placeholder="city"
              name={"city"}
              options={citynames}
              value={item.city}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {false}
              />
          </div>
          <div style={{width:"98px",marginRight:"10px", overflow:"right"}}>
              <TextFieldGroup
              placeholder="zip"
              name={"zip"}
              type="text"
              value={item.zip||''}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
          <div style={{width:"98px",marginRight:"10px", overflow:"right"}}>
              <DynamicSelectGroup
              placeholder="state"
              name={"state"}
              options={statenames}
              value={item.state}
              onChange={(e)=>{this.onChange(e,i)}}
              required = {true}
              />
          </div>
        </div>
        <br/>
      </div>   
    })
  }
    return (
      <div className="login">
        <div className="container">
          <div className="row mt-8">
            <div className="m-auto text-center">
                <h1 style={{fontSize:'30px',color:'black'}}>
                    What is your children's Information?
                </h1>
                <br/>
                <form className="row" onSubmit={this.onSubmit}>
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
  getUserInfo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userinfo: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  userinfo: state.userinfo
});

export default connect(mapStateToProps, { updateUserInfo, getUserInfo })(BasicQuestions);
