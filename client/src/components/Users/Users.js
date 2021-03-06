import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import { getManagers, deleteManager, updateManager, registerManager } from '../../actions/managerActions';
import  ADMINTable  from "../common/table";
import TextFieldGroup from "../common/TextFieldGroup";
import DynamicSelectGroup from "../common/DynamicSelectGroup";
import "./Users.css";
import 'bootstrap/dist/css/bootstrap.min.css';
class Users extends Component {
    constructor() {
        super();
        this.state = {
            managers:[],
            columns: [
                {
                    Header: 'Name',
                    accessor: 'name',
                },
                {
                    Header: 'Manager',
                    accessor: 'role'
                },
                {
                  Header: 'Delete',
                  accessor: 'delete'
                }
              ],
            newadmin:{
                name: '',
                email: '',
                password: '',
                password2: '',
                role:'user'
            },
            role: '',
            delete:{},
        }
        this.onChange = this.onChange.bind(this);
        this.setDeleteItem = this.setDeleteItem.bind(this);
        this.delete = this.delete.bind(this);
        this.changeCheck = this.changeCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
componentDidMount(){
    this.props.getManagers();
}
componentWillReceiveProps(nextProps){
    this.setState({managers:nextProps.managers});
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
    this.props.registerManager(newUser);
    $("#newadmin").css('display','none');
    $("body").css('overflow','auto');
}
delete(){
    this.props.deleteManager(this.state.delete);
    $("#id04").css('display','none');
    $("body").css('overflow','auto');
}
setDeleteItem(e){
    this.setState({delete:{email:e.target.value}});
    $("#id04").css('display','block');
    $("body").css('overflow','hidden');
}
changeCheck(e){
    const data = {
        email: e.target.value,
        role: e.target.checked
    }
    this.props.updateManager(data);
}
  render(){
    let admins;
    let newadmin = this.state.newadmin;
    let managers = this.state.managers;
    if(managers.length > 0){
        admins = managers.map((element, index)=>{
            let role = false;
            if(element.role === "manager"){
                role = true;
            }
            return (
                {
                name: element.name,
                // role: <Switch onChange={this.handleChange} checked={role}  disabled={disabled}/>,
                role: <input type="checkbox" onChange={(e)=>this.changeCheck(e)} name="role" value={element.email} checked={role}/>,
                delete: <button type='button' onClick={this.setDeleteItem} value={element.email} className="btn btn-danger">delete</button>,
                }
            );
        })
    }
    return (<div className="managerTable">
        <button type='button' onClick={()=>{$('#newadmin').css('display','block');$('body').css('overflow','hidden')}} className='btn btn-success' style={{width:'150px',marginBottom:'20px'}}><i className='fa fa-user-plus'></i> New User</button>
        <ADMINTable columns={this.state.columns} data={admins||[]} />
        <div id="id04" className="modal">
            <span onClick={()=>{$('#id04').css('display','none');$('body').css('overflow','auto')}} className="close" title="Close Modal">×</span>
            <form className="modal-content" action="/action_page.php">
              <div className="container">
                <h2 style={{fontSize:'30px'}}>Delete Manager</h2><br/>
                <p>Are you sure you want to delete?</p>
              
                <div className="clearfix">
                  <button type="button" onClick={()=>{$('#id04').css('display','none');$('body').css('overflow','auto')}} className="btn cancelbtn">Cancel</button>
                  <button type="button" onClick={this.delete} className="btn deletebtn">Delete</button>
                </div>
            </div>
            </form>
        </div>
        <div id="newadmin" className="modal">
            <span onClick={()=>{$('#newadmin').css('display','none');$('body').css('overflow','auto');}} className="close" title="Close Modal">×</span>
            <div className="m-auto card">
              <h2 className="display-4 text-center text-light">Sign Up</h2>
              <p style={{color:'black'}} className="lead text-center text-light">
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
                  options={['user','manager']}
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
                <input type="submit" className="btn btn-info btn-block mt-4 mb-5"/>
              </form>
            </div>
          </div>
        </div>
        )
      }
  }
  
Users.propTypes = {
    getManagers: PropTypes.func.isRequired,
    deleteManager: PropTypes.func.isRequired,
    updageManager: PropTypes.func.isRequired,
    registerManager: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    managers: state.managers
});
export default connect(mapStateToProps,{getManagers, deleteManager, updateManager, registerManager})(Users);