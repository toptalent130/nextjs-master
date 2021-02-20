
import React, { Component} from "react"; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
// import BasicTable from '../../common/basic.table';
// import FilterTable from '../../common/filter.table';
// import PaginationTable from '../../common/pagination.table';
import Children from './chtable';
import Admins from './acctable';
import { getAllChildren } from '../../../actions/userinfoAction';
import $ from 'jquery';
import TextFieldGroup from '../../common/TextFieldGroup';
import DynamicSelectGroup from '../../common/DynamicSelectGroup';
import { registerAdmin } from '../../../actions/adminActions';
// import { updateUserInfo, getUserInfo } from '../../actions/userinfoAction';

class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      allchildren:{},
      newadmin:{
        name: '',
        email: '',
        password: '',
        password2: '',
        role:'admin'
      },
      errors:{},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    this.props.getAllChildren();
  }
  componentWillMount(){
    $('body').css('overflow','auto');
  }
  componentWillReceiveProps(nextProps){
    this.setState({allchildren:nextProps.allchildren})
  }
  toTop = ()=>{
    $('html, body').animate({scrollTop: 0},'slow');
  }
  onChange(e){
    const { newadmin } = this.state;
    newadmin[e.target.name] = e.target.value;
    this.setState({newadmin:newadmin});
  }
  onSubmit(e){
    e.preventDefault();
    const { newadmin } = this.state;
    const newUser = {
      name: newadmin.name,
      email: newadmin.email,
      password: newadmin.password,
      password2: newadmin.password2,
      role: newadmin.role
    };
    this.props.registerAdmin(newUser);
    $("#newadmin").css('display','none');
    $("body").css('overflow','auto');
  }
  render(){
    const { newadmin } = this.state;
    let children = [];
    let users = [];
    if(JSON.stringify(this.state.allchildren)!=='{}'){
      children = <Children data={this.state.allchildren.allchildren}/>
      users = <Admins data={this.state.allchildren.users}/>
    };
    let createnewadmin;
    if(this.props.auth.user.name === "superadmin")
    {
       createnewadmin = <button type='button' disabled={false} onClick={()=>{$('#newadmin').css('display','block');$('body').css('overflow','hidden')}} className='btn btn-success' style={{width:'150px',marginBottom:'20px'}}><i className='fa fa-user-plus'></i> New Admin</button>
    } else {
      createnewadmin = <button type='button' disabled={true} onClick={()=>{$('#newadmin').css('display','block');$('body').css('overflow','hidden')}} className='btn btn-success' style={{width:'150px',marginBottom:'20px'}}><i className='fa fa-user-plus'></i> New Admin</button>
    }
    return (
      <div className="admin">
        <div className="admindashboard">
          <div className="chcolumn">
            <div className="card">
              <p style={{fontSize:"30px"}}><i className="fa fa-child"></i> Children Information</p>
              <hr style={{width:"100%"}}/>
                {children}
            </div>
          </div>
          <div className="acccolumn">
            <div className="card">
              <p style={{fontSize:"30px"}}><i className="fa fa-users"></i> Administrators</p>
              <hr style={{width:"100%"}}/>
              { createnewadmin }
              {users}
            </div>
          </div>
        <div id="newadmin" className="modal">
            <span onClick={()=>{$('#newadmin').css('display','none');$('body').css('overflow','auto');}} className="close" title="Close Modal">×</span>
            <div className="m-auto card">
              <h2 className="display-4 text-center">Sign Up</h2>
              <p style={{color:'black'}} className="lead text-center">
                Create a new Admin
              </p>
              <br/>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={newadmin.name}
                  onChange={this.onChange}
                  required = {true}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={newadmin.email}
                  onChange={this.onChange}
                  required = {true}
                />
                <DynamicSelectGroup
                  placeholder="Role"
                  name={"role"}
                  options={['admin','superadmin']}
                  value={newadmin.role}
                  onChange={this.onChange}
                  required = {true}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={newadmin.password}
                  onChange={this.onChange}
                  required = {true}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={newadmin.password2}
                  onChange={this.onChange}
                  required = {true}
                />
                <input type="submit" className="btn btn-info btn-block mt-4 mb-5"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getAllChildren: PropTypes.func.isRequired,
  allchildren: PropTypes.object.isRequired,
  registerAdmin: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  allchildren: state.allchildren,
  errors: state.errors
});

export default connect(mapStateToProps, {getAllChildren, registerAdmin})(
  AdminDashboard
);