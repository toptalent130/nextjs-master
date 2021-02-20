// src/components/filter.table.js
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  ChTable  from "../../common/table";
import ChildDoc1 from './childdoc'
import ChildDoc2 from './childdoc1'
import ChildDoc3 from './childdoc2'
import $ from 'jquery';
import { deleteChild } from '../../../actions/userinfoAction';

// Define a default UI for filtering

class ChildSide extends Component{
    constructor() {
        super();
        this.state = {
          columns:[
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Last Edited Date',
                accessor: 'led'
            },

            {
                Header: 'Last Modified by',
                accessor: 'lm'
            },
            {
                Header: 'Completion',
                accessor: 'completion'
            },
            {
                Header: 'Open',
                accessor: 'open'
            },
            {
                Header: 'Edit',
                accessor: 'edit'
            },
            {
                Header: 'Delete',
                accessor: 'delete'
            }
          ],
          page:'',
          delete:{}
        };
        this.func = this.func.bind(this);
        this.delete = this.delete.bind(this);
        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        }
        func(e, value){
            if(value !== "delete"){
                const data = JSON.parse((e.target.value));
                const now = new Date();
                const birth = new Date(data.childinfo.birthday);
                let difyears = now.getFullYear()-birth.getFullYear();
                const allmonths = difyears*12+(birth.getMonth()-now.getMonth());
                if(allmonths < 24){
                        this.setState({page: <ChildDoc1 tem={value} data={data}/>})
                } else if(allmonths >= 24 && allmonths <= 56){
                        this.setState({page: <ChildDoc2 tem={value} data={data}/>})
                } else {
                    this.setState({page: <ChildDoc3 tem={value} data={data}/>})
                }
                $('#openchild').css('display','block');
                $('body').css('overflow','hidden');
            } else {
                this.setState({delete: JSON.parse(e.target.value)});
                $("#id02").css('display','block');
                $("body").css('overflow','hidden');
            }
        }
        delete(){
            this.props.deleteChild(this.state.delete);
            $("#id02").css('display','none');
            $("body").css('overflow','auto');
        }
        render(){
            const children = this.props.data.map((element, index)=>{
                const led = new Date(element.childinfo.date);
                const leddate = led.getMonth()+1+'/'+led.getDate()+'/'+led.getFullYear();
                const userid = element.userid;
                const childid = element.childinfo._id;
                let disabled = false;
                if(this.props.auth.user.role < 3)
                {
                    disabled = true;
                }
                return (
                    {
                    name: element.childinfo.firstname+' '+element.childinfo.lastname,
                    led: leddate,
                    lm: element.modifier,
                    completion: element.childinfo.completion,
                    edit: <button type='button' onClick={(e)=>this.func(e, 'edit')} disabled= {disabled} value={JSON.stringify(element)}className='btn btn-primary'>edit</button>,
                    open: <button type='button' onClick={(e)=>this.func(e, 'open')} value={JSON.stringify(element)}className='btn btn-warning'>open</button>,
                    delete: <button type='button' onClick={(e)=>this.func(e, 'delete')} disabled={disabled} value={JSON.stringify({userid:userid,childid:childid})} className='btn btn-danger'>delete</button>,
                    }
                );
            })
            return (<div>
                    {<ChTable columns={this.state.columns} data={children} />}
                    <div id="openchild" className="modal">
                        <span onClick={()=>{$('#openchild').css('display','none');$('body').css('overflow','auto');}} className="close" title="Close Modal">×</span>
                        {this.state.page}
                    </div>
                    <div id="id02" className="modal">
                        <span onClick={()=>{$('#id02').css('display','none');$('body').css('overflow','auto')}} className="close" title="Close Modal">×</span>
                        <form className="modal-content" action="/action_page.php">
                        <div className="container">
                            <h2 style={{fontSize:'30px'}}>Delete Child Info</h2><br/>
                            <p>Are you sure you want to delete?</p>
                        
                            <div className="clearfix">
                            <button type="button" onClick={()=>{$('#id02').css('display','none');$('body').css('overflow','auto')}} className="cancelbtn">Cancel</button>
                            <button type="button" onClick={this.delete} className="deletebtn">Delete</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            )
    }
}
ChildSide.propTypes = {
    auth: PropTypes.object.isRequired,
    // updateAdmin: PropTypes.func.isRequired,
    deleteChild: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
  });
  export default connect(mapStateToProps,{deleteChild})(ChildSide);