import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import $ from 'jquery';

import { updateUserInfo, deleteChild, getUserInfo } from '../../actions/userinfoAction';
import { logoutUser } from '../../actions/authActions';
import Astyle from '../pages/A-style';
import Bstyle from '../pages/B-style';
import Cstyle from '../pages/C-style';
import osidemaps from './sidemap';
// import Loader from '../loader/loader';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      style:'',
      selectedChildData:'',
      errors:{},
      userinfo:{}
    }
    this.chooseChild = this.chooseChild.bind(this);
  }
  componentDidMount = async()=>{
    this.props.getUserInfo({userid:this.props.auth.user.id});
    // await this.props.getSideMap();
  }
  // A4bookDelete= ()=>{
  //   $('#id01').css('display','none');
  //   $('.mySidenav').css('display','none');
  //   this.props.deleteChild({userid:this.props.userinfo.userid, childid: this.state.selectedChildData._id});
  //   this.setState({style:'',selectedChildData: ''});
  //   if(this.props.userinfo.children.length === 1){
  //     localStorage.removeItem('userinfo');
  //     this.props.logoutUser();
  //   }
  //   window.scrollTo(0, 0);
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({userinfo: nextProps.userinfo});
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  componentWillMount(){
    $(document).ready(()=>{
      $(".sidenavClose").click(()=>{
        $(".sidenav").css("margin-left","-300px");
        $(".maincontent").css("margin-left","0");
        $(".sidenavOpen").css("display","block");
      })
      $(".sidenavOpen").click(()=>{
        $(".sidenavOpen").css("display","none");
        $(".sidenav").css("margin-left","0px");
        if($(window).width() <= 1065){
          $(".maincontent").css("margin-left","0px");
        } else {
          $(".maincontent").css("margin-left","300px");
        }
      });
      $(".sitemap").trigger("click");
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  toTop = ()=>{
    $('html, body').animate({scrollTop: 0},'slow');
  }
  
  chooseChild=(e,which)=>{
    $('.mySidenav').css('display','block');
    this.setState({style:which,selectedChildData: JSON.parse(e.target.value)});
  }
  render() {
    const { user } = this.props.auth;
    let sidemaps = null;
      if(this.state.style === "A"){
       sidemaps = osidemaps[0].map((item, index)=>{
          let tem = '#'+ Object.keys(item);
          return  <li key={index}><a href={tem}>{Object.values(item)}</a></li>
       });
      }
      if(this.state.style === "B"){
          sidemaps = osidemaps[0].map((item, index)=>{
            let tem = '#'+ Object.keys(item);
            return  <li key={index}><a href={tem}>{Object.values(item)}</a></li>
          });
      }
      if(this.state.style === "C"){
        sidemaps = osidemaps[0].map((item, index)=>{
          let tem = '#'+ Object.keys(item);
          return  <li key={index}><a href={tem}>{Object.values(item)}</a></li>
          });
      }
    let content = '';
    let precontent = (<div className="preContent text-center">
                    <p className="text-light" style={{fontSize:"60px"}}>Welcome To PreSchool Admission System</p>
                    <p className="text-success" style={{fontSize:"35px"}}>{user.name}</p>
                    <p className="text-primary" style={{fontSize:"20px"}}>Please choose child in Menu</p>
                  </div>);
    $('.preContent').css('display','block');
    if(this.state.style!==''){
      $('.preContent').css('display','none');
      if(this.state.style === "A"){
        content = <Astyle id={'divToPrint'} data={this.state.selectedChildData}/>;
      } else if(this.state.style === "B"){
        content = <Bstyle id={'divToPrint'} data={this.state.selectedChildData}/>;
      } else if(this.state.style === "C"){
        content = <Cstyle id={'divToPrint'} data={this.state.selectedChildData}/>;
      }
    }
    let childrenlist = '';
    if( JSON.stringify(this.state.userinfo) !== '{}'){
        childrenlist = this.state.userinfo.children.map((item, index)=>{
          const now = new Date();
          const birth = new Date(item.birthday);
          let difyears = now.getFullYear()-birth.getFullYear();
          const allmonths = difyears*12+(birth.getMonth()-now.getMonth());
        if(allmonths < 24)
          return  <li key={index}><button type="button" onClick={(e)=>this.chooseChild(e, "A")} value={JSON.stringify(item)}>{item.firstname+" "+item.lastname+'('+parseInt(allmonths/12)+'years '+(allmonths%12)+'months)'}</button></li>
        else if(allmonths >= 24 && allmonths <= 56)
          return  <li key={index}><button type="button"  onClick={(e)=>this.chooseChild(e, "B")} value={JSON.stringify(item)}>{item.firstname+" "+item.lastname+'('+parseInt(allmonths/12)+'years '+(allmonths%12)+'months)'}</button></li>
        else
          return  <li key={index}><button type="button"  onClick={(e)=>this.chooseChild(e, "C")} value={JSON.stringify(item)}>{item.firstname+" "+item.lastname+'('+parseInt(allmonths/12)+'years '+(allmonths%12)+'months)'}</button></li>
      });
    }
      return (
        <div className="dashboard">
					<button className="btn sidenavOpen" style={{color:"white"}}>{'☰'}</button>
          <div className="sidenav">
            <div className="sidenavHeader" style={{display:"flex"}}>
                <div><i className="fa fa-home"></i> Menu List</div>
					      <button className="btn sidenavClose" style={{color:"white"}}>{'<'}</button>
            </div>
            <div type="button" className="chlist" data-toggle="collapse" data-target="#demo2"><i className="fa fa-history"></i> Children history</div>
              <ul id="demo2" className="collapse in">
                {childrenlist}
              </ul>
            <div className="sitemap" type="button" data-toggle="collapse" data-target="#demo1"><i className="fa fa-sitemap"></i> Children Info List</div>
              <ul id="demo1" className="collapse in">
                {sidemaps}
              </ul>
          </div>
          <div className="maincontent">
            {precontent}
            {content}
            <button onClick={this.toTop.bind(this)} className="btn btn-danger toTop" title="Go to top">Top</button>
          </div>
      </div>
      );
    }
  }

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
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

export default connect(mapStateToProps,{updateUserInfo, deleteChild, logoutUser, getUserInfo})(
  Dashboard
);