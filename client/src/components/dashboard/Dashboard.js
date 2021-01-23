import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import $ from 'jquery';

import { updateUserInfo, deleteChild } from '../../actions/userinfoAction';
import { logoutUser } from '../../actions/authActions';
import { getSideMap } from '../../actions/sidemapActions';
import Astyle from '../pages/A-style';
import Bstyle from '../pages/B-style';
import Loader from '../loader/loader';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      style:'',
      sidemaps:[],
      selectedChildData:'',
      errors:{},
      userinfo:{}
    }
    this.chooseChild = this.chooseChild.bind(this);
  }
  componentDidMount(){
    this.props.getSideMap();
  }
  A4bookDelete= ()=>{
    $('#id01').css('display','none');
    $('.mySidenav').css('display','none');
    this.props.deleteChild({userid:this.props.userinfo.userid, childid: this.state.selectedChildData._id});
    this.setState({style:'',selectedChildData: ''});
    if(this.props.userinfo.children.length === 1){
      localStorage.removeItem('userinfo');
      this.props.logoutUser();
    }
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({sidemaps:nextProps.sidemaps});
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  componentWillMount(){
  }
  onDeleteClick(id) {
    this.props.deleteProblem(id, this.props.history);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  // resetAndGo = () => {
  //   if(this.props.userinfo.children.length === 0){
  //     localStorage.removeItem('userinfo');
  //     this.props.logoutUser();
  //     this.props.history.push('/login');
  //   } else {
  //     this.props.history.push('/dashboard');
  //   }
  //   // this.props.logoutUser();
  // }
  onSubmit = (e) => {
    e.preventDefault();
    const check = {
      examid: this.state.examid,
      password: this.state.password
    };

    this.props.checkExam(check, this.props.history);
  }
  toTop = ()=>{
      window.scrollTo(0, 0);
  }
  printPDF=async()=>{
    $('.loading').css('display','block');
    const input = document.getElementById('divToPrint');
    const inputHeightMm =  $('#divToPrint').height() * 25.4 / 96;
    // console.log($('#divToPrint').width() * 25.4 / 96);
    const a4WidthMm = 210;
    const a4HeightMm = 298;
    // const a4HeightPx = mmToPx(a4HeightMm);
    const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;
    await html2canvas(input)
    .then((canvas)=>{
      var doc = new jsPDF('p', 'mm','a4');
      var imgData = canvas.toDataURL('image/png');
      /* add initial page */
      // doc.addPage('l','mm','a4');
      doc.addImage(imgData, 'PNG', -2, -70, a4WidthMm, 0);
      // addImage(imageData, format, x, y, width, height, alias, compression, rotation)
      /* add extra pages if the div size is larger than a a4 size */
      if (numPages > 0) {
          var j = 1;
          while (j !== numPages) {
              doc.addPage('l','mm','a4');
              doc.addImage(imgData, 'PNG', -2, -(j * a4HeightMm)-70, a4WidthMm, 0);
              j++;
          }
      }
      doc.save('download.pdf');
    })
    $('.loading').css('display','none');
  }
  chooseChild=(e,which)=>{
    $('.mySidenav').css('display','block');
    this.setState({style:which,selectedChildData: JSON.parse(e.target.value)});
  }
  render() {
		// console.log('>>>>>>>>>>?',this.props.sidemaps);
    const { user } = this.props.auth;
    let sidemaps = null;
    if(this.state.sidemaps.length !== 0){
      if(this.state.style === "A"){
       sidemaps = this.state.sidemaps[0].ltty.map((item, index)=>{
          let tem = '#'+ Object.keys(item);
          return  <li key={index}><a href={tem}>{Object.values(item)}</a></li>
       });
      }
      if(this.state.style === "B"){
          sidemaps = this.state.sidemaps[0].gtty.map((item, index)=>{
            let tem = '#'+ Object.keys(item);
            return  <li key={index}><a href={tem}>{Object.values(item)}</a></li>
          });
      }
    }
    let content = '';
    let precontent = (<div className="preContent text-center" align="center">
                    <p className="text-primary" style={{fontSize:"50px",width:'500px'}}>Welcome To PreSchool Admission System</p>
                    <p className="text-success" style={{fontSize:"35px"}}>{user.name}</p>
                    <p className="text-danger" style={{fontSize:"20px"}}>Please choose your child's age in Menu</p>
                  </div>);
    $('.preContent').css('display','block');
    if(this.state.style!==''){
      $('.preContent').css('display','none');
      if(this.state.style === "A"){
        content = <Astyle id={'divToPrint'} data={this.state.selectedChildData}/>;
      } else if(this.state.style === "B"){
        content = <Bstyle id={'divToPrint'} data={this.state.selectedChildData}/>;
      }
    }
    let childrenlist = '';
    if( this.props.userinfo !== {}){
        childrenlist = this.props.userinfo.children.map((item, index)=>{
        if(item.age <= 2)
          return  <li key={index}><button type="button" onClick={(e)=>this.chooseChild(e, "A")} value={JSON.stringify(item)}>{index+1} child doc(2- years)</button></li>
        else if(item.age > 2)
          return  <li key={index}><button type="button"  onClick={(e)=>this.chooseChild(e, "B")} value={JSON.stringify(item)}>{index+1} child doc(2+ years)</button></li>
      });
    }
      return (
        <div className="dashboard">
          <div className="mySidenav">
            {/* <button type="button" id="new" disabled onClick={this.resetAndGo.bind(this)}>NEW</button> */}
            {/* <button type="button" id="save"  to="/save">SAVE</button> */}
            <button type="button" id="delete"  onClick={()=>$('#id01').css('display','block')}>DELETE</button>
            <button type="button" id="print"  onClick={this.printPDF.bind(this)}><div id="myMm" style={{height:"1mm"}}></div>PRINT PDF</button>
          </div>
          <div className="sidenav">
            <button type="button" className="chlist" data-toggle="collapse" data-target="#demo2"><i className="fa fa-history"></i> Admission Histroy</button>
            <div id="demo2" className="collapse in">
              <ul>
                {childrenlist}
              </ul>
            </div>
            <button className="sitemap" type="button" data-toggle="collapse" data-target="#demo1"><i className="fa fa-sitemap"></i> Less than 2 years</button>
            <div id="demo1" className="collapse in">
                <ul>
                  {sidemaps}
                </ul>
            </div>
          </div>
          <div align="center">
            {precontent}
            {content}
          </div>
          <button onClick={this.toTop.bind(this)} className="btn btn-danger toTop" title="Go to top">Top</button>
          <div id="id01" className="modal">
            <span onClick={()=>$('#id01').css('display','none')} className="close" title="Close Modal">×</span>
            <form className="modal-content" action="/action_page.php">
              <div className="container">
                <h1 style={{fontSize:'30px'}}>Delete Account</h1><br/>
                <p>Are you sure you want to delete your account?</p>
              
                <div className="clearfix">
                  <button type="button" onClick={()=>$('#id01').css('display','none')} className="cancelbtn">Cancel</button>
                  <button type="button" onClick={this.A4bookDelete.bind(this)} className="deletebtn">Delete</button>
                </div>
              </div>
            </form>
          </div>
          <div className="loading">
            <Loader/>
          </div>
      </div>
      );
    }
  }

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getSideMap: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  deleteChild: PropTypes.func.isRequired,
  errors: PropTypes.object,
  userinfo: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  sidemaps: state.sidemaps,
  errors: state.errors,
  userinfo: state.userinfo
});

export default connect(mapStateToProps,{getSideMap, updateUserInfo, deleteChild, logoutUser})(
  Dashboard
);
