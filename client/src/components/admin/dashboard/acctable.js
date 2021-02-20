import React, { Component } from "react";
import Switch from "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css';
import  ADMINTable  from "../../common/table";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateAdmin, deleteAdmin } from '../../../actions/adminActions';
import $ from 'jquery';

// Define a default UI for filtering
class AdminSide extends Component{
    constructor() {
        super();
        this.state = {
            columns: [
                {
                    Header: 'Name',
                    accessor: 'name',
                },
                {
                    Header: 'Role',
                    accessor: 'role'
                },
                {
                  Header: 'Delete',
                  accessor: 'delete'
                }
              ],
            role: '',
            delete:{}
        }
        this.onChange = this.onChange.bind(this);
        this.setDeleteItem = this.setDeleteItem.bind(this);
        this.delete = this.delete.bind(this);
    }
  onChange(e){
    const admin = {
      email: e.target.value,
      role: e.target.checked
    }
    // this.props.updateAdmin(admin);
    console.log('>>>>',e.target.value)
  }
  delete(){
    this.props.deleteAdmin(this.state.delete);
    $("#id01").css('display','none');
    $("body").css('overflow','auto');
  }
  handleChange(value){
    console.log('<<<<<',value);
  }
  setDeleteItem(e){
    this.setState({delete:{email:e.target.value}});
    $("#id01").css('display','block');
    $("body").css('overflow','hidden');
  }
  render(){
      const admins = this.props.data.map((element, index)=>{
        let role = false;
        if(element.role > 2){
          role = true;
        }
        let disabled = true;
        if(this.props.auth.user.name === "superadmin")
        {
          disabled = false;
        }
        if(element.name === "superadmin")
        {
          disabled = true;
        }
        return (
            {
            name: element.name,
            // role:'',
            // role: <Switch onChange={this.handleChange} checked={role}  disabled={disabled}/>,
            role: <input type="checkbox" onChange={this.onChange} name="role" value={element.email} checked={role} disabled={disabled}/>,
            delete: <button type='button' onClick={this.setDeleteItem} value={element.email} disabled={disabled} className="btn btn-danger">delete</button>,
            }
        );
      })
        return (<div>
        <ADMINTable columns={this.state.columns} data={admins} />
        <div id="id01" className="modal">
            <span onClick={()=>{$('#id01').css('display','none');$('body').css('overflow','auto')}} className="close" title="Close Modal">×</span>
            <form className="modal-content" action="/action_page.php">
              <div className="container">
                <h2 style={{fontSize:'30px'}}>Delete Admin</h2><br/>
                <p>Are you sure you want to delete?</p>
              
                <div className="clearfix">
                  <button type="button" onClick={()=>{$('#id01').css('display','none');$('body').css('overflow','auto')}} className="cancelbtn">Cancel</button>
                  <button type="button" onClick={this.delete} className="deletebtn">Delete</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        )
      }
  }
AdminSide.propTypes = {
  auth: PropTypes.object.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  deleteAdmin: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {updateAdmin, deleteAdmin})(AdminSide);