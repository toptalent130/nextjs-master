// import {text} from 'body-parser'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Signature  from '../../pages/signature'
import { updateUserInfo, updateChildInfo } from '../../../actions/userinfoAction';
import'../../pages/css/Genious_book.css'
import $ from 'jquery';


class ChildDoc extends Component {
	constructor() {
		super();
		this.state = {
            userid: '',
			data: {},
            basicinfo:{},
            func: {}
		};
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
        const tem = JSON.parse(localStorage.getItem('child'));
        this.setState({userid: tem.userid, data:tem.childinfo.data, basicinfo:tem, func: tem.func});
	}
	getParameterByName =(name, url = window.location.href) => {
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
	componentWillMount() {
        $(document).ready(()=>{
            $("#whereEmpty").click(async()=>{
                const inputtags = $("#openchild input[type='text']");
                for(let i=0; i<inputtags.length; i++){
                    if(!inputtags.eq(i).val()){
                        const temY = inputtags.eq(i).offset().top;
                        // const temX = inputtags.eq(i).offset().left;
                        await $('#openchild').animate({scrollTop: temY-500},'slow');
                        break;
                    }
                }
            });
        });
	}
	componentWillReceiveProps(nextProps){
		// this.setState({basicinfo: nextProps.child,userid: this.props.userinfo._id, data:{...this.state.data}});
		// this.props.userinfo.children.forEach(async(element) => {
		// 	if(element._id === nextProps.child._id){
		// 		if(localStorage.getItem('signature2')){
		// 			await this.setState({basicinfo: nextProps.child,userid: this.props.userinfo._id, data:{...element.data, signature2: localStorage.getItem('signature2')}});
		// 		}
		// 		if(localStorage.getItem('signature1')){
		// 			await this.setState({basicinfo: nextProps.child,userid: this.props.userinfo._id, data:{...element.data, signature1: localStorage.getItem('signature1')}});
		// 		}
		// 		if(localStorage.getItem('signature')){
		// 			await this.setState({basicinfo: nextProps.child,userid: this.props.userinfo._id, data:{...element.data, signature: localStorage.getItem('signature')}});
		// 		}
		// 		localStorage.removeItem('signature');
		// 		localStorage.removeItem('signature1');
		// 		localStorage.removeItem('signature2');
		// 	}
		// });
	}
	onSubmit(e) {
		e.preventDefault();
		let filledfield = 0;
		const totalfields = $("textarea").length+$("input[type='text']").length+$("input[type='checkbox']").length
		for(let i=0; i<$("textarea").length; i++){
			if($("textarea").eq(i).val())
			{
				filledfield++;
			}
		}
		for(let i=0; i<$("input[type='text']").length; i++){
			if($("input[type='checkbox']").eq(i).val()===true)
			{
				filledfield++;
			}
		}
		for(let i=0; i<$("input[type='text']").length; i++){
			if($("input[type='text']").eq(i).val())
			{
				filledfield++;
			}
		}
		const data = {...this.state, completion: parseInt((filledfield/totalfields)*100)+'%'}
		// this.props.updateChildInfo(data);
	}
	onChange(e) {
		if(e.target.name.indexOf('check')){
			this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		} else {
			this.setState({data:{...this.state.data,[e.target.name]:e.target.checked}});
		}
	}
	render() {
		const imageURL = this.state.data.signature||'';
		const imageURL1 = this.state.data.signature1||'';
		const imageURL2 = this.state.data.signature2||'';
		const basicinfo = this.state.basicinfo;
		const userinfo = this.props.userinfo;
		const childfirstname = basicinfo.firstname||'';
		const childmiddlename = basicinfo.middlename||'';
		const childlastname = basicinfo.lastname||'';
		const childname = childfirstname+' '+childmiddlename+''+childlastname;
		const childstreet = basicinfo.street||'';
		const childsex = basicinfo.sex||'';
		const childhouse_number = basicinfo.house_number||'';
		const childcity = basicinfo.city||'';
		const childstate =  basicinfo.state||'';
		const childzip = basicinfo.zip||'';
		const now = new Date();
		const today = now.getMonth()+1+'/'+now.getDate()+'/'+now.getFullYear();
		const birth = new Date(basicinfo.birthday);
		const childbirthday = birth.getMonth()+1+'/'+birth.getDate()+'/'+birth.getFullYear();
		const childage = now.getFullYear()- birth.getFullYear();
		const guadian_firstname = userinfo.guadian_firstname||'';
		const guadian_lastname = userinfo.guadian_lastname||'';
		const guadianname = guadian_firstname+' '+guadian_lastname;
		const gstreet = userinfo.street||'';
		const gcity = userinfo.city||'';
		const gzip = userinfo.zip||'';
		const gstate = userinfo.state||'';
		const ghouse_number = userinfo.house_number||'';
		const gbusiness_phone_number = userinfo.business_phone_number||'';
		const ghome_phone_number = userinfo.home_phone_number||'';
        const ghomeaddress = ghouse_number+' '+gstreet+' '+gcity+' '+gstate;
		let wherebutton='';
        if(this.props.tem === 'edit')
            wherebutton = <a href="/admindashboard"><div className="whereEmpty"><button type="submit" className="btn" id="whereEmpty">Where</button></div></a>;
		return (
				<form onSubmit={this.onSubmit} className="main-page bubble-element Page" style={{width: "794px", height: "27450px", minHeight: "100%", marginRight: "auto", marginLeft: "auto", position: "relative", top: "0px", overflow: "hidden", background: "none rgb(153, 153, 153)", boxSizing: "border-box"}}>
					<div className="bubble-r-line" style={{marginTop: "0px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945576889x317603967675586400%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "2", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "repeat-y", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1612438659894x329661647910199230%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281000%2529-3.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "166px", height: "27px"}}>
									<div className="bubble-r-box" style={{height: "27px", left: "222px", width: "116px"}}>
										<input type="text" name="text310" value={today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="7" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "27px", width: "116px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "27px", left: "356px", width: "116px"}}>
										<input type="text" name="text311" value={this.state.data.text311||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="8" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "27px", width: "116px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "68px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "22", height: "22px", width: "22px", left: "4px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
										<input type="checkbox" onChange={this.onChange} name="check99" checked={this.state.data.check99||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>

											<label htmlFor="1612439190237x2259"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "319px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "21", height: "22px", width: "22px", left: "3px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
										<input type="checkbox" onChange={this.onChange} name="check98" checked={this.state.data.check98||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>

											<label htmlFor="1612439190236x2199"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "570px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "20", height: "22px", width: "22px", left: "2px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check97" checked={this.state.data.check97||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190235x2139"></label>
										</div>
									</div>
								</div>
								{/* //// */}
								<div className="bubble-r-line" style={{marginTop: "-2px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "74px", width: "170px"}}>
										<input type="text" name="text338" value={childfirstname} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="12" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "31px", width: "170px", left: "0px", top: "12px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "43px", left: "300px", width: "170px"}}>
										<input type="text" name="text339" value={childmiddlename} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="12" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "31px", width: "170px", left: "0px", top: "12px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "43px", left: "560px", width: "170px"}}>
										<input type="text" name="text340" value={childlastname} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="12" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "31px", width: "150px", left: "0px", top: "12px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								{/* /// */}
								<div className="bubble-r-line" style={{marginTop: "121px", height: "43px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "74px", width: "170px"}}>
										<input type="text" name="text312" value={childbirthday} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="12" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "31px", width: "170px", left: "0px", top: "12px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "411px", width: "84px"}}>
										<input type="text" name="text313" value={childage||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="14" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "26px", width: "84px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "35px", left: "619px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "20", height: "22px", width: "22px", left: "0px", top: "16px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check96" checked={this.state.data.check96||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190230x2019"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "36px", left: "663px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "20", height: "22px", width: "22px", left: "0px", top: "16px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check95" checked={this.state.data.check95||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190231x2079"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "74px", width: "606px"}}>
										<input type="text" name="text314" value={childstreet} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="13" style={{position: "absolute", boxSizing: "border-box", zIndex: "10", height: "28px", width: "606px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "21px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "74px", width: "139px"}}>
										<input type="text" name="text315" value={childcity} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="17" style={{position: "absolute", boxSizing: "border-box", zIndex: "11", height: "28px", width: "139px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "279px", width: "139px"}}>
										<input type="text" name="text316" value={childstate} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="18" style={{position: "absolute", boxSizing: "border-box", zIndex: "12", height: "28px", width: "139px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "483px", width: "139px"}}>
										<input type="text" name="text317" value={childzip} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="19" style={{position: "absolute", boxSizing: "border-box", zIndex: "13", height: "28px", width: "139px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "19px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "74px", width: "154px"}}>
										<input type="text" name="text318" value={ghome_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="20" style={{position: "absolute", boxSizing: "border-box", zIndex: "14", height: "28px", width: "154px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "323px", width: "154px"}}>
										<input type="text" name="text319" value={this.state.data.text319||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="21" style={{position: "absolute", boxSizing: "border-box", zIndex: "15", height: "28px", width: "154px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "531px", width: "154px"}}>
										<input type="text" name="text320" value={this.state.data.text320||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="22" style={{position: "absolute", boxSizing: "border-box", zIndex: "16", height: "28px", width: "154px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "109px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "73px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "18", height: "22px", width: "22px", left: "0px", top: "4px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check94" checked={this.state.data.check94||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190221x1719"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "156px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "19", height: "22px", width: "22px", left: "0px", top: "4px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check93" checked={this.state.data.check93||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190224x1779"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "240px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "19", height: "22px", width: "22px", left: "0px", top: "4px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check92" checked={this.state.data.check92||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190225x1839"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "322px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "19", height: "22px", width: "22px", left: "0px", top: "4px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check91" checked={this.state.data.check91||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190227x1899"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "405px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "20", height: "22px", width: "22px", left: "0px", top: "4px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check90" checked={this.state.data.check90||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612439190228x1959"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "464px", width: "154px"}}>
										<input type="text" name="text321" value={this.state.data.text321||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="290" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "260px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>					
						</div>
					</div>


					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "2", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "repeat-y", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1612443493267x608650786588624400%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-4.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "125px", height: "18px"}}>
									<div className="bubble-r-box" style={{height: "18px", left: "94px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "26", height: "17px", width: "17px", left: "0px", top: "1px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											<input type="checkbox" onChange={this.onChange} name="check66" checked={this.state.data.check66||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171579x605"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "183px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "27", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											<input type="checkbox" onChange={this.onChange} name="check67" checked={this.state.data.check67||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171582x666"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "258px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "28", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check68" checked={this.state.data.check68||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171583x726"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "508px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "28", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check69" checked={this.state.data.check69||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171585x786"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "587px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "28", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check70" checked={this.state.data.check70||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171586x846"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "1px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "75px", width: "248px"}}>
										<input type="text" name="text322" value={this.state.data.text322||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="6" style={{position: "absolute", boxSizing: "border-box", zIndex: "29", height: "24px", width: "248px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "403px", width: "252px"}}>
										<input type="text" name="text323" value={this.state.data.text323||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="7" style={{position: "absolute", boxSizing: "border-box", zIndex: "30", height: "24px", width: "252px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "20px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "74px", width: "248px"}}>
										<input type="text" name="text324" value={this.state.data.text324||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="8" style={{position: "absolute", boxSizing: "border-box", zIndex: "31", height: "24px", width: "248px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "403px", width: "248px"}}>
										<input type="text" name="text325" value={this.state.data.text325||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="9" style={{position: "absolute", boxSizing: "border-box", zIndex: "36", height: "24px", width: "248px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "19px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "74px", width: "248px"}}>
										<input type="text" name="text326" value={this.state.data.text326||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="10" style={{position: "absolute", boxSizing: "border-box", zIndex: "32", height: "24px", width: "248px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "403px", width: "248px"}}>
										<input type="text" name="text327" value={this.state.data.text327||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="11" style={{position: "absolute", boxSizing: "border-box", zIndex: "35", height: "24px", width: "248px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "21px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "75px", width: "248px"}}>
										<input type="text" name="text328" value={this.state.data.text328||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="12" style={{position: "absolute", boxSizing: "border-box", zIndex: "33", height: "24px", width: "248px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "403px", width: "248px"}}>
										<input type="text" name="text329" value={this.state.data.text329||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="13" style={{position: "absolute", boxSizing: "border-box", zIndex: "34", height: "24px", width: "248px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "35px", height: "18px"}}>
									<div className="bubble-r-box" style={{height: "18px", left: "362px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "37", height: "17px", width: "17px", left: "0px", top: "1px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check71" checked={this.state.data.check71||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171601x1399"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "18px", left: "448px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "37", height: "17px", width: "17px", left: "0px", top: "1px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check72" checked={this.state.data.check72||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171602x1459"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "527px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "37", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check73" checked={this.state.data.check73||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171603x1519"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "551px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "38", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check74" checked={this.state.data.check74||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171605x1579"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "15px", height: "18px"}}>
									<div className="bubble-r-box" style={{height: "18px", left: "366px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "1px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
										
										<input type="checkbox" onChange={this.onChange} name="check75" checked={this.state.data.check75||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171611x1819"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "18px", left: "448px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "1px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check76" checked={this.state.data.check76||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171609x1759"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "526px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check77" checked={this.state.data.check77||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171606x1639"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "550px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check78" checked={this.state.data.check78||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171607x1699"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "14px", height: "17px"}}>
									<div className="bubble-r-box" style={{height: "17px", left: "372px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check79" checked={this.state.data.check79||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171615x2059"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "449px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check80" checked={this.state.data.check80||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171614x1999"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "527px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check81" checked={this.state.data.check81||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171612x1879"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "551px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check82" checked={this.state.data.check82||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171613x1939"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "19px", left: "345px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "41", height: "17px", width: "17px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check83" checked={this.state.data.check83||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171618x2171"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "19px", left: "386px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "42", height: "17px", width: "17px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check84" checked={this.state.data.check84||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171619x2231"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "555px", width: "147px"}}>
										<input type="text" name="text330" value={this.state.data.text330||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="28" style={{position: "absolute", boxSizing: "border-box", zIndex: "40", height: "24px", width: "147px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "18px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "659px", width: "64px"}}>
										<input type="text" name="text331" value={this.state.data.text331||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="35" style={{position: "absolute", boxSizing: "border-box", zIndex: "45", height: "24px", width: "64px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "17px"}}>
									<div className="bubble-r-box" style={{height: "17px", left: "356px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "43", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check85" checked={this.state.data.check85||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171625x2291"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "455px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "43", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											
										<input type="checkbox" onChange={this.onChange} name="check86" checked={this.state.data.check86||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171631x2351"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "495px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "44", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
											<label htmlFor="1612441171632x2411"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "544px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "44", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
										
										<input type="checkbox" onChange={this.onChange} name="check87" checked={this.state.data.check87||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171634x2471"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "583px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "44", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
										<input type="checkbox" onChange={this.onChange} name="check88" checked={this.state.data.check88||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171636x2531"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "622px", width: "17px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "44", height: "17px", width: "17px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37); line-height: 1"}}>
										<input type="checkbox" onChange={this.onChange} name="check89" checked={this.state.data.check89||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1612441171637x2591"></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "2", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "repeat-y", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1612438574391x250159405955938000%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-5.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "720px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "134px", width: "189px"}}>
										<Signature imageUrl={imageURL} type={"parent"}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "391px", width: "182px"}}>
										<input type="text" name="text333" value={this.state.data.text333||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="2" style={{position: "absolute", boxSizing: "border-box", zIndex: "24", height: "31px", width: "182px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "600px", width: "102px"}}>
										<input type="text" name="text334" value={today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="3" style={{position: "absolute", boxSizing: "border-box", zIndex: "24", height: "31px", width: "102px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "21px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "134px", width: "189px"}}>
										<Signature imageUrl={imageURL2} type={"director"}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "391px", width: "182px"}}>
										<input type="text" name="text336" value={this.state.data.text336||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="5" style={{position: "absolute", boxSizing: "border-box", zIndex: "24", height: "31px", width: "182px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "600px", width: "102px"}}>
										<input type="text" name="text337" value={today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED"  maxLength="" tabIndex="6" style={{position: "absolute", boxSizing: "border-box", zIndex: "25", height: "31px", width: "102px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="infant_need" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609946996695x265852081762884450%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-6.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "150px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "175px", width: "463px"}}>
										<input type="text" name="text185" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="243" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "463px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "168px", width: "157px"}}>
										<input type="text" name="text186" value={childbirthday} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="244" style={{position: "absolute", boxSizing: "border-box", height: "23px", width: "157px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "531px", width: "157px"}}>
										<input type="text" name="text187" value={this.state.data.text187||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="245" style={{position: "absolute", boxSizing: "border-box", height: "21px", width: "157px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "149px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "456px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "25px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check32" checked={this.state.data.check32||false} id="1610302662062x19424" style={{backgroundColor: "white"}} tabIndex="247"/>
											<label htmlFor="1610302662062x19424"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "559px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "25px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check33" checked={this.state.data.check33||false} id="1610302662063x19484" style={{backgroundColor: "white"}} tabIndex="248"/>
											<label htmlFor="1610302662063x19484"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "336px", width: "141px"}}>
										<input type="text" name="text188" value={this.state.data.text188||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="246" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "344px", width: "270px"}}>
										<input type="text" name="text189" value={this.state.data.text189||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="249" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "270px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "533px", width: "50px"}}>
										<input type="text" name="text190" value={this.state.data.text190||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="250" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "50px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "526px", width: "170px"}}>
										<input type="text" name="text191" value={this.state.data.text191||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="251" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "170px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "198px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "413px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "25px", left: "-1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check34" checked={this.state.data.check34||false} id="1610302662064x19544" style={{backgroundColor: "white"}} tabIndex="252"/>
											<label htmlFor="1610302662064x19544"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "498px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "25px", left: "-1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check35" checked={this.state.data.check35||false} id="1610302662064x19604" style={{backgroundColor: "white"}} tabIndex="253"/>
											<label htmlFor="1610302662064x19604"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "33px", height: "44px"}}>
									<div className="bubble-r-box" style={{height: "44px", left: "63px", width: "648px"}}>
										<textarea onChange={this.onChange} name="text247" value={this.state.data.text247||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="254" style={{position: "absolute", boxSizing: "border-box", height: "44px", width: "648px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "36px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "81px", width: "601px"}}>
										<input type="text" name="text192" value={this.state.data.text192||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="255" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "601px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "40px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "82px", width: "601px"}}>
										<input type="text" name="text193" value={this.state.data.text193||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="256" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "601px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "14px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "457px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "22px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check36" checked={this.state.data.check36||false} id="1610302662068x19820" style={{backgroundColor: "white"}} tabIndex="258"/>
											<label htmlFor="1610302662068x19820"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "510px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "22px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check37" checked={this.state.data.check37||false} id="1610302662069x19880" style={{backgroundColor: "white"}} tabIndex="259"/>
											<label htmlFor="1610302662069x19880"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "83px", width: "601px"}}>
										<input type="text" name="text194" value={this.state.data.text194||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="257" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "601px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "388px", width: "313px"}}>
										<input type="text" name="text195" value={this.state.data.text195||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="260" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "313px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609947042233x221756904492174100%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-7.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "293px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "70px", width: "108px"}}>
										<input type="text" name="text196" value={this.state.data.text196||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="261" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "108px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "10px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "390px", width: "119px"}}>
										<input type="text" name="text197" value={this.state.data.text197||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="262" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "119px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "442px", width: "256px"}}>
										<input type="text" name="text198" value={this.state.data.text198||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="263" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "256px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "39px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "79px", width: "602px"}}>
										<input type="text" name="text199" value={this.state.data.text199||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="264" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "602px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "36px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "239px", width: "462px"}}>
										<input type="text" name="text200" value={this.state.data.text200||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="265" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "462px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "10px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "70px", width: "632px"}}>
										<input type="text" name="text201" value={this.state.data.text201||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="266" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "632px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "294px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "70px", width: "632px"}}>
										<input type="text" name="text202" value={this.state.data.text202||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="267" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "632px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "46px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "628px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "22px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check38" checked={this.state.data.check38||false} id="1610302662101x20674" style={{backgroundColor: "white"}} tabIndex="269"/>
											<label htmlFor="1610302662101x20674"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "678px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "22px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check39" checked={this.state.data.check39||false} id="1610302662102x20734" style={{backgroundColor: "white"}} tabIndex="270"/>
											<label htmlFor="1610302662102x20734"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "250px", width: "454px"}}>
										<input type="text" name="text203" value={this.state.data.text203||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="268" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "454px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="other" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609947102113x375230293580750340%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-8.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "160px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "65px", width: "650px"}}>
										<textarea onChange={this.onChange} name="text248" value={this.state.data.text248||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="271" style={{position: "absolute", boxSizing: "border-box", height: "46px", width: "650px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "43px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "63px", width: "654px"}}>
										<textarea onChange={this.onChange} name="text249" value={this.state.data.text249||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="272" style={{position: "absolute", boxSizing: "border-box", height: "46px", width: "654px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "279px", width: "202px"}}>
										<Signature imageUrl={imageURL} type={"parent"} />
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "577px", width: "108px"}}>
										<input type="text" name="text205" value={this.state.data.text205||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="274" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "108px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "211px", width: "268px"}}>
										<Signature imageUrl={imageURL1} type={"teacher"} />
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "577px", width: "108px"}}>
										<input type="text" name="text207" value={this.state.data.text207||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="276" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "108px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "34px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "300px", width: "140px"}}>
										<input type="text" name="text208" value={this.state.data.text208||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="277" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "140px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "632px", width: "66px"}}>
										<input type="text" name="text209" value={this.state.data.text209||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="278" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "66px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "184px", width: "111px"}}>
										<input type="text" name="text210" value={this.state.data.text210||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="279" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "111px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "158px", width: "418px"}}>
										<input type="text" name="text211" value={this.state.data.text211||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="280" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "418px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "300px", width: "137px"}}>
										<input type="text" name="text212" value={this.state.data.text212||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="281" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "137px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "637px", width: "66px"}}>
										<input type="text" name="text213" value={this.state.data.text213||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="282" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "66px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "188px", width: "96px"}}>
										<input type="text" name="text214" value={this.state.data.text214||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="283" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "159px", width: "447px"}}>
										<input type="text" name="text215" value={this.state.data.text215||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="284" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "447px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "318px", width: "114px"}}>
										<input type="text" name="text216" value={this.state.data.text216||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="285" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "114px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "638px", width: "61px"}}>
										<input type="text" name="text217" value={this.state.data.text217||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="286" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "61px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "182px", width: "99px"}}>
										<input type="text" name="text218" value={this.state.data.text218||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="287" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "99px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "159px", width: "385px"}}>
										<input type="text" name="text219" value={this.state.data.text219||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="288" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "385px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* here700 */}
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic700" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945041122x483330148230868740%2FLIC700-1.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "243px", height: "34px"}}>
									<div className="bubble-r-box" style={{height: "33px", left: "144px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text222" value={childlastname} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="148" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "301px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text223" value={childmiddlename}  className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="OPTIONAL" maxLength="" tabIndex="149" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "445px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text224" value={childfirstname}  className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="150" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "595px", width: "59px"}}>
										<input type="text" name="text121" value={childsex||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="151" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "59px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "673px", width: "99px"}}>
										<input type="text" name="text122" value={ghome_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="152" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "99px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "23px", height: "34px"}}>
									<div className="bubble-r-box" style={{height: "34px", left: "145px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text225" value={childhouse_number} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="153" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "264px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text226" value={childstreet} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="154" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "384px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text227" value={childcity} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="155" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "504px", width: "103px"}}>
										<textarea onChange={this.onChange} name="text228" value={childstate} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="156" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "103px", left: "-20px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "591px", width: "72px"}}>
										<input type="text" name="text123" value={childzip||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="157" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "72px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "674px", width: "100px"}}>
										<input type="text" name="text124" value={childbirthday} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="158" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "100px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "25px", height: "52px"}}>
									<div className="bubble-r-box" style={{height: "52px", left: "172px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text229" value={guadian_lastname} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="159" style={{position: "absolute", boxSizing: "border-box", height: "52px", width: "115px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "51px", left: "311px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text230" value={this.state.data.text230||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="OPTIONAL" maxLength="" tabIndex="160" style={{position: "absolute", boxSizing: "border-box", height: "50px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "52px", left: "455px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text231" value={guadian_firstname} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="161" style={{position: "absolute", boxSizing: "border-box", height: "51px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "48px", left: "674px", width: "100px"}}>
										<input type="text" name="text125" value={gbusiness_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="162" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "100px", left: "0px", top: "16px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "29px", height: "47px"}}>
									<div className="bubble-r-box" style={{height: "41px", left: "149px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text232" value={ghouse_number} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="163" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "268px", width: "109px"}}>
										<textarea onChange={this.onChange} name="text233" value={gstreet} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="164" style={{position: "absolute", boxSizing: "border-box", height: "41px", width: "109px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "381px", width: "120px"}}>
										<textarea onChange={this.onChange} name="text234" value={gcity} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="165" style={{position: "absolute", boxSizing: "border-box", height: "42px", width: "120px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "505px", width: "82px"}}>
										<textarea onChange={this.onChange} name="text235" value={gstate} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="166" style={{position: "absolute", boxSizing: "border-box", height: "44px", width: "82px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "589px", width: "75px"}}>
										<input type="text" name="text126" value={gzip} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="167" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "75px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "673px", width: "100px"}}>
										<input type="text" name="text127" value={ghome_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="168" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "100px", left: "0px", top: "15px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "49px"}}>
									<div className="bubble-r-box" style={{height: "47px", left: "172px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text236" value={guadian_lastname} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="169" style={{position: "absolute", boxSizing: "border-box", height: "47px", width: "115px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "48px", left: "309px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text237" value={this.state.data.text237||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="OPTIONAL" maxLength="" tabIndex="170" style={{position: "absolute", boxSizing: "border-box", height: "47px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "49px", left: "455px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text238" value={guadian_firstname} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="171" style={{position: "absolute", boxSizing: "border-box", height: "48px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "674px", width: "100px"}}>
										<input type="text" name="text128" value={gbusiness_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="172" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "100px", left: "0px", top: "15px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "26px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "152px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text239" value={ghouse_number} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="173" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "271px", width: "109px"}}>
										<textarea onChange={this.onChange} name="text240" value={gstreet} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="174" style={{position: "absolute", boxSizing: "border-box", height: "41px", width: "109px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "384px", width: "120px"}}>
										<textarea onChange={this.onChange} name="text241" value={gcity} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="175" style={{position: "absolute", boxSizing: "border-box", height: "42px", width: "120px", left: "0px", top: "2px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "46px", left: "507px", width: "83px"}}>
										<textarea onChange={this.onChange} name="text242" value={gstate} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="176" style={{position: "absolute", boxSizing: "border-box", height: "44px", width: "83px", left: "0px", top: "2px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "592px", width: "75px"}}>
										<input type="text" name="text129" value={gzip} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="177" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "75px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "674px", width: "100px"}}>
										<input type="text" name="text130" value={ghome_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="178" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "100px", left: "0px", top: "17px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "21px", height: "48px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "149px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text243" value={guadian_lastname} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="179" style={{position: "absolute", boxSizing: "border-box", height: "46px", width: "115px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "48px", left: "271px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text244" value={this.state.data.text244||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="OPTIONAL" maxLength="" tabIndex="180" style={{position: "absolute", boxSizing: "border-box", height: "45px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "46px", left: "404px", width: "115px"}}>
										<textarea onChange={this.onChange} name="text245" value={guadian_firstname} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="181" style={{position: "absolute", boxSizing: "border-box", height: "44px", width: "115px", left: "0px", top: "2px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "558px", width: "100px"}}>
										<input type="text" name="text131" value={ghome_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="182" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "100px", left: "0px", top: "20px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "674px", width: "100px"}}>
										<input type="text" name="text132" value={gbusiness_phone_number} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="183" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "100px", left: "0px", top: "20px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "54px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "25px", width: "160px"}}>
										<input type="text" name="text133" value={this.state.data.text133||''} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="184" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "216px", width: "160px"}}>
										<input type="text" name="text134" value={this.state.data.text134||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="185" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "413px", width: "160px"}}>
										<input type="text" name="text135" value={this.state.data.text135||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="186" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "599px", width: "160px"}}>
										<input type="text" name="text136" value={this.state.data.text136||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="187" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "3px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "21px", left: "26px", width: "160px"}}>
										<input type="text" name="text137" value={this.state.data.text137||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="188" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "216px", width: "160px"}}>
										<input type="text" name="text138" value={this.state.data.text138||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="189" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "413px", width: "160px"}}>
										<input type="text" name="text139" value={this.state.data.text139||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="190" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "600px", width: "160px"}}>
										<input type="text" name="text140" value={this.state.data.text140||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="191" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "21px", left: "25px", width: "160px"}}>
										<input type="text" name="text141" value={this.state.data.text141||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="192" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "216px", width: "160px"}}>
										<input type="text" name="text142" value={this.state.data.text142||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="193" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "414px", width: "160px"}}>
										<input type="text" name="text143" value={this.state.data.text143||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="194" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "600px", width: "160px"}}>
										<input type="text" name="text144" value={this.state.data.text144||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="195" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "25px", width: "160px"}}>
										<input type="text" name="text145" value={this.state.data.text145||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="196" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "218px", width: "160px"}}>
										<input type="text" name="text146" value={this.state.data.text146||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="197" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "415px", width: "160px"}}>
										<input type="text" name="text147" value={this.state.data.text147||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="198" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "600px", width: "160px"}}>
										<input type="text" name="text148" value={this.state.data.text148||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="199" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "44px", height: "44px"}}>
									<div className="bubble-r-box" style={{height: "40px", left: "26px", width: "159px"}}>
										<input type="text" name="text149" value={this.state.data.text149||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="200" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "159px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "219px", width: "159px"}}>
										<input type="text" name="text150" value={this.state.data.text150||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="201" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "159px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "412px", width: "210px"}}>
										<input type="text" name="text151" value={this.state.data.text151||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="202" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "210px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "40px", left: "666px", width: "120px"}}>
										<input type="text" name="text152" value={this.state.data.text152||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="203" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "120px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "20px", height: "42px"}}>
									<div className="bubble-r-box" style={{height: "42px", left: "24px", width: "159px"}}>
										<input type="text" name="text153" value={this.state.data.text153||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="204" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "159px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "40px", left: "218px", width: "159px"}}>
										<input type="text" name="text154" value={this.state.data.text154||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="205" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "159px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "410px", width: "208px"}}>
										<input type="text" name="text155" value={this.state.data.text155||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="206" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "208px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "665px", width: "115px"}}>
										<input type="text" name="text156" value={this.state.data.text156||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="207" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "115px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "22px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "17px", left: "16px", width: "14px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "11px", width: "14px", left: "2px", top: "8px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check26" checked={this.state.data.check26||false} id="1610302661897x16393" style={{backgroundColor: "white"}} tabIndex="208"/>
											<label htmlFor="1610302661897x16393"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "322px", width: "14px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "11px", width: "14px", left: "2px", top: "8px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check27" checked={this.state.data.check27||false} id="1610302661866x13133" style={{backgroundColor: "white"}} tabIndex="209"/>
											<label htmlFor="1610302661866x13133"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "502px", width: "260px"}}>
										<input type="text" name="text157" value={this.state.data.text157||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="210" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "260px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945087135x604709109348207100%2FLIC700-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "187px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "36px", width: "327px"}}>
										<input type="text" name="text158" value={this.state.data.text158||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="211" style={{position: "absolute", boxSizing: "border-box", height: "23px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "427px", width: "327px"}}>
										<input type="text" name="text159" value={this.state.data.text159||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="212" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "327px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "36px", width: "327px"}}>
										<input type="text" name="text160" value={this.state.data.text160||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="213" style={{position: "absolute", boxSizing: "border-box", height: "23px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "427px", width: "327px"}}>
										<input type="text" name="text161" value={this.state.data.text161||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="214" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "327px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "36px", width: "327px"}}>
										<input type="text" name="text162" value={this.state.data.text162||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="215" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "428px", width: "327px"}}>
										<input type="text" name="text163" value={this.state.data.text163||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="216" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "327px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "37px", width: "327px"}}>
										<input type="text" name="text164" value={this.state.data.text164||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="217" style={{position: "absolute", boxSizing: "border-box", height: "23px", width: "327px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "428px", width: "327px"}}>
										<input type="text" name="text165" value={this.state.data.text165||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="218" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "37px", width: "327px"}}>
										<input type="text" name="text166" value={this.state.data.text166||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="219" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "429px", width: "327px"}}>
										<input type="text" name="text167" value={this.state.data.text167||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="220" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "288px", width: "465px"}}>
										<input type="text" name="text168" value={this.state.data.text168||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="221" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "465px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "37px"}}>
									<div className="bubble-r-box" style={{height: "37px", left: "23px", width: "563px"}}>
										<input type="text" name="text12" value={this.state.data.text12||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="222" style={{position: "absolute", boxSizing: "border-box", height: "34px", width: "563px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "636px", width: "134px"}}>
										<input type="text" name="text170" value={this.state.data.text170||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="223" style={{position: "absolute", boxSizing: "border-box", height: "33px", width: "134px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "67px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "26px", width: "353px"}}>
										<input type="text" name="text171" value={this.state.data.text171||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="224" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "353px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "416px", width: "358px"}}>
										<input type="text" name="text172" value={this.state.data.text172||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="225" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "358px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic702" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944908267x409824464875616600%2FLIC702-1.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "206px", height: "35px"}}>
									<div className="bubble-r-box" style={{height: "35px", left: "30px", width: "350px"}}>
										<input type="text" name="text69" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="71" style={{position: "absolute", boxSizing: "border-box", height: "35px", width: "350px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "35px", left: "411px", width: "85px"}}>
										<input type="text" name="text70" value={childsex} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="72" style={{position: "absolute", boxSizing: "border-box", height: "33px", width: "85px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "533px", width: "225px"}}>
										<input type="text" name="text71" value={childbirthday} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="73" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "225px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "29px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "30px", width: "469px"}}>
										<input type="text" name="text72" value={guadianname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="74" style={{position: "absolute", boxSizing: "border-box", height: "43px", width: "469px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "424px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "115px", top: "34px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check60" checked={this.state.data.check60||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="368"/>
											<label htmlFor="1610302661744x9431">Yes</label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "485px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "115px", top: "34px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check61" checked={this.state.data.check61||false} id="1610302661746x9491" style={{backgroundColor: "white"}} tabIndex="369"/>
											<label htmlFor="1610302661746x9491">No</label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "30px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "29px", width: "469px"}}>
										<input type="text" name="text74" value={guadianname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="76" style={{position: "absolute", boxSizing: "border-box", height: "43px", width: "469px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "424px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "115px", top: "34px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check62" checked={this.state.data.check62||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="370"/>
											<label htmlFor="1610302661744x9431">Yes</label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "485px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "115px", top: "34px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check63" checked={this.state.data.check63||false} id="1610302661746x9491" style={{backgroundColor: "white"}} tabIndex="371"/>
											<label htmlFor="1610302661746x9491">No</label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "48px", height: "41px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "424px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "-400px", top: "10px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check64" checked={this.state.data.check64||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="372"/>
											<label htmlFor="1610302661744x9431">Yes</label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "485px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "-400px", top: "10px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check65" checked={this.state.data.check65||false} id="1610302661746x9491" style={{backgroundColor: "white"}} tabIndex="373"/>
											<label htmlFor="1610302661746x9491">No</label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "535px", width: "236px"}}>
										<input type="text" name="text77" value={this.state.data.text77||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="79" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "236px", left: "0px", top: "13px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "31px", height: "51px"}}>
									<div className="bubble-r-box" style={{height: "41px", left: "25px", width: "130px"}}>
										<input type="text" name="text78" value={this.state.data.text78||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="80" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "130px", left: "0px", top: "16px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "27px", left: "208px", width: "54px"}}>
										<input type="text" name="text79" value={this.state.data.text79||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="81" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "54px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "280px", width: "130px"}}>
										<input type="text" name="text80" value={this.state.data.text80||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="82" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "130px", left: "0px", top: "17px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "458px", width: "54px"}}>
										<input type="text" name="text81" value={this.state.data.text81||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="83" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "54px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "525px", width: "130px"}}>
										<input type="text" name="text82" value={this.state.data.text82||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="84" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "130px", left: "0px", top: "16px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "51px", left: "736px", width: "54px"}}>
										<input type="text" name="text83" value={this.state.data.text83||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="85" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "54px", left: "0px", top: "24px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "93px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "17px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "7px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check1" checked={this.state.data.check1||false} id="1610302661667x7098" style={{backgroundColor: "white"}} tabIndex="86"/>
											<label htmlFor="1610302661667x7098"></label>
										</div>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "33px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check2" checked={this.state.data.check2||false} id="1610302661668x7158" style={{backgroundColor: "white"}} tabIndex="87"/>
											<label htmlFor="1610302661668x7158"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "29px", left: "146px", width: "115px"}}>
										<input type="text" name="text84" value={this.state.data.text84||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="88" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "115px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "43px", left: "271px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "6px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check3" checked={this.state.data.check3||false} id="1610302661672x7338" style={{backgroundColor: "white"}} tabIndex="89"/>
											<label htmlFor="1610302661672x7338"></label>
										</div>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "31px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check4" checked={this.state.data.check4||false} id="1610302661674x7458" style={{backgroundColor: "white"}} tabIndex="90"/>
											<label htmlFor="1610302661674x7458"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "404px", width: "115px"}}>
										<input type="text" name="text85" value={this.state.data.text85||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="91" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "115px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "527px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check5" checked={this.state.data.check5||false} id="1610302661676x7518" style={{backgroundColor: "white"}} tabIndex="92"/>
											<label htmlFor="1610302661676x7518"></label>
										</div>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "31px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check6" checked={this.state.data.check6||false} id="1610302661677x7578" style={{backgroundColor: "white"}} tabIndex="93"/>
											<label htmlFor="1610302661677x7578"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "27px", left: "659px", width: "115px"}}>
										<input type="text" name="text86" value={this.state.data.text86||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="94" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "115px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "19px"}}>
									<div className="bubble-r-box" style={{height: "19px", left: "17px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "6px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check7" checked={this.state.data.check7||false} id="1610302661669x7218" style={{backgroundColor: "white"}} tabIndex="95"/>
											<label htmlFor="1610302661669x7218"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "271px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check8" checked={this.state.data.check8||false} id="1610302661692x8286" style={{backgroundColor: "white"}} tabIndex="96"/>
											<label htmlFor="1610302661692x8286"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "19px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "17px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "14px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check9" checked={this.state.data.check9||false} id="1610302661671x7278" style={{backgroundColor: "white"}} tabIndex="97"/>
											<label htmlFor="1610302661671x7278"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "271px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "8px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check10" checked={this.state.data.check10||false} id="1610302661673x7398" style={{backgroundColor: "white"}} tabIndex="98"/>
											<label htmlFor="1610302661673x7398"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "527px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check11" checked={this.state.data.check11||false} id="1610302661679x7638" style={{backgroundColor: "white"}} tabIndex="99"/>
											<label htmlFor="1610302661679x7638"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "82px", height: "38px"}}>
									<div className="bubble-r-box" style={{height: "38px", left: "83px", width: "541px"}}>
										<input type="text" name="text87" value={this.state.data.text87||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="100" style={{position: "absolute", boxSizing: "border-box", height: "38px", width: "541px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "25px", height: "64px"}}>
									<div className="bubble-r-box" style={{height: "15px", left: "85px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check12" checked={this.state.data.check12||false} id="1610302661687x8010" style={{backgroundColor: "white"}} tabIndex="101"/>
											<label htmlFor="1610302661687x8010"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "146px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check13" checked={this.state.data.check13||false} id="1610302661688x8070" style={{backgroundColor: "white"}} tabIndex="102"/>
											<label htmlFor="1610302661688x8070"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "57px", left: "281px", width: "196px"}}>
										<input type="text" name="text88" value={this.state.data.text88||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="103" style={{position: "absolute", boxSizing: "border-box", height: "48px", width: "196px", left: "0px", top: "9px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "64px", left: "513px", width: "266px"}}>
										<input type="text" name="text89" value={this.state.data.text89||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="104" style={{position: "absolute", boxSizing: "border-box", height: "38px", width: "266px", left: "0px", top: "26px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944960326x763816715774411400%2FLIC702-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "142px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "60px", width: "190px"}}>
										<input type="text" name="text90" value={this.state.data.text90||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="105" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "190px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "353px", width: "145px"}}>
										<input type="text" name="text91" value={this.state.data.text91||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="106" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "145px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "540px", width: "211px"}}>
										<input type="text" name="text92" value={this.state.data.text92||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="107" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "211px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "24px", height: "33px"}}>
									<div className="bubble-r-box" style={{height: "33px", left: "103px", width: "147px"}}>
										<input type="text" name="text93" value={this.state.data.text93||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="108" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "147px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "282px", width: "215px"}}>
										<input type="text" name="text94" value={this.state.data.text94||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="109" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "215px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "541px", width: "208px"}}>
										<input type="text" name="text95" value={this.state.data.text95||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="110" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "208px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "372px", width: "380px"}}>
										<input type="text" name="text96" value={this.state.data.text96||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="111" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "380px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "335px", width: "418px"}}>
										<input type="text" name="text97" value={this.state.data.text97||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="112" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "418px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "14px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "338px", width: "416px"}}>
										<input type="text" name="text98" value={this.state.data.text98||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="113" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "416px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "369px", width: "384px"}}>
										<input type="text" name="text99" value={this.state.data.text99||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="114" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "384px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "4px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "335px", width: "418px"}}>
										<input type="text" name="text100" value={this.state.data.text100||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="115" style={{position: "absolute", boxSizing: "border-box", height: "26px", width: "418px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "339px", width: "415px"}}>
										<input type="text" name="text101" value={this.state.data.text101||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="116" style={{position: "absolute", boxSizing: "border-box", height: "26px", width: "415px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "23px", height: "33px"}}>
									<div className="bubble-r-box" style={{height: "33px", left: "31px", width: "369px"}}>
										<input type="text" name="text102" value={this.state.data.text102||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="117" style={{position: "absolute", boxSizing: "border-box", height: "33px", width: "369px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "437px", width: "318px"}}>
										<input type="text" name="text103" value={this.state.data.text103||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="118" style={{position: "absolute", boxSizing: "border-box", height: "33px", width: "318px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "24px", height: "15px"}}>
									<div className="bubble-r-box" style={{height: "15px", left: "15px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check14" checked={this.state.data.check14||false} id="1610302661741x9311" style={{backgroundColor: "white"}} tabIndex="119"/>
											<label htmlFor="1610302661741x9311"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "76px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check15" checked={this.state.data.check15||false} id="1610302661742x9371" style={{backgroundColor: "white"}} tabIndex="120"/>
											<label htmlFor="1610302661742x9371"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "263px", width: "134px"}}>
										<input type="text" name="text104" value={this.state.data.text104||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="121" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "134px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "424px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check16" checked={this.state.data.check16||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="122"/>
											<label htmlFor="1610302661744x9431"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "485px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check17" checked={this.state.data.check17||false} id="1610302661746x9491" style={{backgroundColor: "white"}} tabIndex="123"/>
											<label htmlFor="1610302661746x9491"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "651px", width: "105px"}}>
										<input type="text" name="text105" value={this.state.data.text105||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="124" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "105px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "22px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "32px", left: "34px", width: "305px"}}>
										<input type="text" name="text106" value={this.state.data.text106||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="125" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "305px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "409px", width: "350px"}}>
										<input type="text" name="text107" value={this.state.data.text107||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="126" style={{position: "absolute", boxSizing: "border-box", height: "31px", width: "350px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "29px", height: "42px"}}>
									<div className="bubble-r-box" style={{height: "42px", left: "32px", width: "730px"}}>
										<input type="text" name="text108" value={this.state.data.text108||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="127" style={{position: "absolute", boxSizing: "border-box", height: "42px", width: "730px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "77px", height: "54px"}}>
									<div className="bubble-r-box" style={{height: "15px", left: "15px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check18" checked={this.state.data.check18||false} id="1610302661759x10163" style={{backgroundColor: "white"}} tabIndex="128"/>
											<label htmlFor="1610302661759x10163"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "77px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check19" checked={this.state.data.check19||false} id="1610302661752x9819" style={{backgroundColor: "white"}} tabIndex="129"/>
											<label htmlFor="1610302661752x9819"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "45px", left: "265px", width: "125px"}}>
										<input type="text" name="text109" value={this.state.data.text109||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="130" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "125px", left: "0px", top: "5px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "410px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "2px", top: "21px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check20" checked={this.state.data.check20||false} id="1610302661753x9879" style={{backgroundColor: "white"}} tabIndex="131"/>
											<label htmlFor="1610302661753x9879"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "472px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "21px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check21" checked={this.state.data.check21||false} id="1610302661754x9939" style={{backgroundColor: "white"}} tabIndex="132"/>
											<label htmlFor="1610302661754x9939"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "54px", left: "613px", width: "132px"}}>
										<input type="text" name="text110" value={this.state.data.text110||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="133" style={{position: "absolute", boxSizing: "border-box", height: "35px", width: "132px", left: "0px", top: "19px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "30px", height: "55px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "15px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "17px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check22" checked={this.state.data.check22||false} id="1610302661751x9759" style={{backgroundColor: "white"}} tabIndex="134"/>
											<label htmlFor="1610302661751x9759"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "76px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "1px", top: "17px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check23" checked={this.state.data.check23||false} id="1610302661758x10103" style={{backgroundColor: "white"}} tabIndex="135"/>
											<label htmlFor="1610302661758x10103"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "40px", left: "264px", width: "126px"}}>
										<input type="text" name="text111" value={this.state.data.text111||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="136" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "126px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "412px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "35px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check24" checked={this.state.data.check24||false} id="1610302661761x10223" style={{backgroundColor: "white"}} tabIndex="137"/>
											<label htmlFor="1610302661761x10223"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "473px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "0px", top: "35px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check25" checked={this.state.data.check25||false} id="1610302661762x10283" style={{backgroundColor: "white"}} tabIndex="138"/>
											<label htmlFor="1610302661762x10283"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "55px", left: "617px", width: "128px"}}>
										<input type="text" name="text112" value={this.state.data.text112||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="139" style={{position: "absolute", boxSizing: "border-box", height: "40px", width: "128px", left: "0px", top: "15px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "32px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "31px", width: "735px"}}>
										<input type="text" name="text113" value={this.state.data.text113||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="140" style={{position: "absolute", boxSizing: "border-box", height: "60px", width: "735px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945005779x741265500833969300%2FLIC702-3.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "146px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "29px", width: "741px"}}>
										<input type="text" name="text114" value={this.state.data.text114||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="141" style={{position: "absolute", boxSizing: "border-box", height: "60px", width: "741px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "43px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "31px", width: "738px"}}>
										<input type="text" name="text115" value={this.state.data.text115||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="142" style={{position: "absolute", boxSizing: "border-box", height: "60px", width: "738px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "56px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "29px", width: "739px"}}>
										<input type="text" name="text116" value={this.state.data.text116||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="143" style={{position: "absolute", boxSizing: "border-box", height: "60px", width: "739px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "61px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "30px", width: "738px"}}>
										<input type="text" name="text117" value={this.state.data.text117||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="144" style={{position: "absolute", boxSizing: "border-box", height: "60px", width: "738px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "54px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "30px", width: "739px"}}>
										<input type="text" name="text118" value={this.state.data.text118||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="145" style={{position: "absolute", boxSizing: "border-box", height: "60px", width: "739px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "41px", height: "43px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "48px", width: "368px"}}>
										<input type="text" name="text12" value={this.state.data.text12||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength=""  tabIndex="146" style={{position: "absolute", boxSizing: "border-box", height: "41px", width: "368px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "507px", width: "260px"}}>
										<input type="text" name="text120" value={this.state.data.text120||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="147" style={{position: "absolute", boxSizing: "border-box", height: "41px", width: "260px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic613A" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944822505x515221670564402600%2FLIC613A.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "579px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "33px", width: "720px"}}>
										<input type="text" name="text57"  value={this.state.data.text57||''} onChange={this.onChange}   className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="59" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "720px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "42px", width: "368px"}}>
										<input type="text" name="text58" value={this.state.data.text58||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="60" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "57px", width: "368px"}}>
										<input type="text" name="text59" value={this.state.data.text59||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="61" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "35px", width: "368px"}}>
										<input type="text" name="text60" value={this.state.data.text60||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="62" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "30px", left: "475px", width: "116px"}}>
										<input type="text" name="text61" value={this.state.data.text61||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="63" style={{position: "absolute", boxSizing: "border-box", height: "26px", width: "116px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "30px", left: "614px", width: "136px"}}>
										<input type="text" name="text62" value={this.state.data.text62||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="64" style={{position: "absolute", boxSizing: "border-box", height: "26px", width: "150px", left: "-20px", top: "6px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "143px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "22px", width: "368px"}}>
										<input type="text" name="text63" value={this.state.data.text63||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="65" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "29px", left: "412px", width: "357px"}}>
										<input type="text" name="text64" value={this.state.data.text64||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="66" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "420px", left: "-50px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "21px", width: "567px"}}>
										<input type="text" name="text65" value={childname} onChange={this.onChange}  className="bubble-element Input"  placeholder="REQURIED" maxLength="" tabIndex="67" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "567px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "17px", height: "27px"}}>
									<div className="bubble-r-box" style={{height: "27px", left: "20px", width: "570px"}}>
										<Signature imageUrl={imageURL} type={"parent"} />
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "20px", width: "571px"}}>
										<input type="text" name="text67" value={this.state.data.text67||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="69" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "571px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "29px", left: "610px", width: "159px"}}>
										<input type="text" name="text68" value={this.state.data.text68||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="70" style={{position: "absolute", boxSizing: "border-box", height: "29px", width: "159px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic995A" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944188878x612278707106444700%2FLIC995.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "466px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "330px", width: "359px"}}>
										<input type="text" name="text51" value={this.state.data.text51||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="52" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "359px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "330px", width: "360px"}}>
										<input type="text" name="text52" value={this.state.data.text52||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="53" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "360px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "330px", width: "360px"}}>
										<input type="text" name="text53" value={this.state.data.text53||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="54" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "360px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "259px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "327px", width: "312px"}}>
										<input type="text" name="text54" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="55" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "312px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "39px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "284px", width: "232px"}}>
										<input type="text" name="text55" value={this.state.data.text55||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="56" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "232px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "141px", width: "218px"}}>
										<Signature imageUrl={imageURL} type={"parent"} />
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "508px", width: "107px"}}>
										<input type="text" name="text56" value={this.state.data.text56||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="58" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "107px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic995E" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945171274x547724564724042300%2FLIC995E.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic627" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944131990x515333030291619700%2FLIC627.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "192px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "304px"}}>
										<input type="text" name="text44" value={this.state.data.text44||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="44" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "53px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "93px", width: "304px"}}>
										<input type="text" name="text45" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="45" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "173px", height: "433px"}}>
									<div className="bubble-r-box" style={{height: "433px", left: "30px", width: "718px"}}>
										<textarea onChange={this.onChange} name="text221" value={this.state.data.text221||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQURIED" maxLength="" tabIndex="46" style={{position: "absolute", boxSizing: "border-box", height: "433px", width: "718px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "15px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "121px", width: "129px"}}>
										<input type="text" name="text46" value={this.state.data.text46||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="47" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "129px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "30px", left: "482px", width: "238px"}}>
										<Signature imageUrl={imageURL} type={"parent"} />
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "40px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "86px", width: "371px"}}>
										<input type="text" name="text48" value={ghomeaddress} onChange={this.onChange} className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="49" style={{position: "absolute", boxSizing: "border-box", height: "29px", width: "371px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "78px", width: "290px"}}>
										<input type="text" name="text49" value={this.state.data.text49||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="50" style={{position: "absolute", boxSizing: "border-box", height: "29px", width: "290px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "454px", width: "312px"}}>
										<input type="text" name="text50" value={this.state.data.text50||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="51" style={{position: "absolute", boxSizing: "border-box", height: "29px", width: "312px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic9221" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944020534x500463531849239400%2FLIC9221.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "168px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "27px", left: "140px", width: "325px"}}>
										<input type="text" name="text15" value={this.state.data.text15||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="15" style={{position: "absolute", boxSizing: "border-box", height: "26px", width: "325px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "483px", width: "115px"}}>
										<input type="text" name="text16" value={this.state.data.text16||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="16" style={{position: "absolute", boxSizing: "border-box", height: "21px", width: "115px", left: "0px", top: "7px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "27px", left: "641px", width: "115px"}}>
										<input type="text" name="text17" value={this.state.data.text17||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="17" style={{position: "absolute", boxSizing: "border-box", height: "27px", width: "115px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "200px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "17px", width: "436px"}}>
										<input type="text" name="text18" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="18" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "436px", left: "0px", top: "6px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "545px", width: "224px"}}>
										<input type="text" name="text19" value={childbirthday} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="19" style={{position: "absolute", boxSizing: "border-box", height: "26px", width: "224px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "18px", width: "435px"}}>
										<input type="text" name="text20" value={this.state.data.text20||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="20" style={{position: "absolute", boxSizing: "border-box", height: "21px", width: "435px", left: "0px", top: "7px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "516px", width: "249px"}}>
										<input type="text" name="text21" value={this.state.data.text21||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="21" style={{position: "absolute", boxSizing: "border-box", height: "26px", width: "249px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "78px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "60px", width: "141px"}}>
										<input type="text" name="text22" value={this.state.data.text22||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="22" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "230px", width: "141px"}}>
										<input type="text" name="text23" value={this.state.data.text23||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="23" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "394px", width: "141px"}}>
										<input type="text" name="text24" value={this.state.data.text24||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="24" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "35px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "114px", width: "317px"}}>
										<Signature imageUrl={imageURL} type={"parent"} />
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "640px", width: "136px"}}>
										<input type="text" name="text26" value={this.state.data.text26||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="26" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "136px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "48px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "41px", width: "122px"}}>
										<input type="text" name="text27" value={this.state.data.text27||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="27" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "122px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "168px", width: "99px"}}>
										<input type="text" name="text28" value={this.state.data.text28||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="28" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "353px", width: "304px"}}>
										<input type="text" name="text29" value={this.state.data.text29||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="29" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "122px"}}>
										<input type="text" name="text30" value={this.state.data.text30||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="30" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "122px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "167px", width: "99px"}}>
										<input type="text" name="text31" value={this.state.data.text31||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="31" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "353px", width: "304px"}}>
										<input type="text" name="text32" value={this.state.data.text32||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="32" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "122px"}}>
										<input type="text" name="text33" value={this.state.data.text33||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="33" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "122px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "169px", width: "99px"}}>
										<input type="text" name="text34" value={this.state.data.text34||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="34" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "354px", width: "304px"}}>
										<input type="text" name="text35" value={this.state.data.text35||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="35" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "122px"}}>
										<input type="text" name="text36" value={this.state.data.text36||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="36" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "122px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "169px", width: "99px"}}>
										<input type="text" name="text37" value={this.state.data.text37||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="37" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "355px", width: "304px"}}>
										<input type="text" name="text38" value={this.state.data.text38||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="38" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "40px", width: "122px"}}>
										<input type="text" name="text39" value={this.state.data.text39||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="39" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "122px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "168px", width: "99px"}}>
										<input type="text" name="text40" value={this.state.data.text40||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="40" style={{position: "absolute", boxSizing: "border-box", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "356px", width: "304px"}}>
										<input type="text" name="text41" value={this.state.data.text41||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="41" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "57px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "48px", width: "469px"}}>
										<input type="text" name="text42" value={this.state.data.text42||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="42" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "469px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "603px", width: "168px"}}>
										<input type="text" name="text43" value={this.state.data.text43||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="43" style={{position: "absolute", boxSizing: "border-box", height: "28px", width: "168px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* here9221 */}
					{/* here diaper */}
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="diaper_rash" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609946877646x650835344988678100%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-43.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "418px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "424px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "80px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check66" checked={this.state.data.check66||false} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="374"/>
											<label htmlFor="1610302661744x9431">Yes</label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "485px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "19px", left: "80px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check67" checked={this.state.data.check67||false} id="1610302661746x9491" style={{backgroundColor: "white"}} tabIndex="375"/>
											<label htmlFor="1610302661746x9491">No</label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "154px", width: "357px"}}>
										<input type="text" name="text182" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="239" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "357px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "30px", height: "72px"}}>
									<div className="bubble-r-box" style={{height: "72px", left: "65px", width: "665px"}}>
										<textarea onChange={this.onChange} name="text246" value={this.state.data.text246||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED
						" maxLength="" tabIndex="240" style={{position: "absolute", boxSizing: "border-box", height: "72px", width: "665px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}></textarea>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "139px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "65px", width: "283px"}}>
										<Signature imageUrl={imageURL} type={"parent"} />
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "390px", width: "180px"}}>
										<input type="text" name="text184" value={this.state.data.text184||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="242" style={{position: "absolute", boxSizing: "border-box", height: "30px", width: "180px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>	
						</div>	
					</div>
					{/* here sunscreen */}
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="sunscreen" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609946778771x908181098849470700%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-42.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "568px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "32px", left: "152px", width: "289px"}}>
										<input type="text" name="text173" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="226" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "289px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "517px", width: "225px"}}>
										<input type="text" name="text174" value={childbirthday} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="227" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "225px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "33px"}}>
									<div className="bubble-r-box" style={{height: "32px", left: "164px", width: "289px"}}>
										<input type="text" name="text175" value={this.state.data.text175||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="228" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "289px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "545px", width: "198px"}}>
										<input type="text" name="text176" value={this.state.data.text176||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="229" style={{position: "absolute", boxSizing: "border-box", height: "32px", width: "198px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "23px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "280px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "19px", width: "24px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check28" checked={this.state.data.check28||false} id="1610302662016x18031" style={{backgroundColor: "white"}} tabIndex="230"/>
											<label htmlFor="1610302662016x18031"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "19px", left: "521px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "19px", width: "24px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check29" checked={this.state.data.check29||false} id="1610302662017x18091" style={{backgroundColor: "white"}} tabIndex="231"/>
											<label htmlFor="1610302662017x18091"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "38px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "21px", left: "396px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "19px", width: "24px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check30" checked={this.state.data.check30||false} id="1610302662018x18151" style={{backgroundColor: "white"}} tabIndex="232"/>
											<label htmlFor="1610302662018x18151"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "19px", left: "642px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "19px", width: "24px", left: "2-px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check31" checked={this.state.data.check31||false} id="1610302662019x18211" style={{backgroundColor: "white"}} tabIndex="233"/>
											<label htmlFor="1610302662019x18211"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "158px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "41px", width: "256px"}}>
										<Signature imageUrl={imageURL} type={"parent"} />	
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "401px", width: "177px"}}>
										<input type="text" name="text178" value={this.state.data.text178||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="235" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "177px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "78px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "46px", width: "256px"}}>
										<input type="text" name="text179" value={this.state.data.text179||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="236" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "256px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "403px", width: "177px"}}>
										<input type="text" name="text180" value={this.state.data.text180||today} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="237" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "177px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition:  "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1611560739516x339913426022659960%2FMeal%2520Benefit%2520Form%2520-%2520Parent%2520%25281%2529-1.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "124px", height: "15px"}}>
									<div className="bubble-r-box" style={{height: "15px", left: "444px", width: "110px"}}>
										<input type="text" name="text309" value={this.state.data.text309||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="289" style={{position: "absolute", boxSizing: "border-box", height: "15px", width: "110px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "227px", width: "529px"}}>
										<input type="text" name="text308" value={this.state.data.text308||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="290" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "260px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "496px", width: "260px"}}>
										<input type="text" name="text307" value={this.state.data.text307||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="291" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "260px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "10px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "273px", width: "483px"}}>
										<input type="text" name="text306" value={this.state.data.text306||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="292" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "483px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "112px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "38px", width: "147px"}}>
										<input type="text" name="text305" value={this.state.data.text305||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="293" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "147px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "189px", width: "142px"}}>
										<input type="text" name="text304" value={this.state.data.text304||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="294" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "142px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "334px", width: "148px"}}>
										<input type="text" name="text303" value={this.state.data.text303||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="295" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "148px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "493px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "11px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check40" checked={this.state.data.check40||false} id="1611545528322x23039" style={{backgroundColor: "white"}} tabIndex="296"/>
											<label htmlFor="1611545528322x23039"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "37px", width: "147px"}}>
										<input type="text" name="text302" value={this.state.data.text302||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="297" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "147px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "189px", width: "142px"}}>
										<input type="text" name="text301" value={this.state.data.text301||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="298" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "142px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "334px", width: "148px"}}>
										<input type="text" name="text300" value={this.state.data.text300||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="299" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "148px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "493px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "11px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check41" checked={this.state.data.check41||false} id="1611545528323x23099" style={{backgroundColor: "white"}} tabIndex="300"/>
											<label htmlFor="1611545528323x23099"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "37px", width: "147px"}}>
										<input type="text" name="text299" value={this.state.data.text299||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="301" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "147px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "189px", width: "142px"}}>
										<input type="text" name="text298" value={this.state.data.text298||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="302" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "142px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "334px", width: "148px"}}>
										<input type="text" name="text297" value={this.state.data.text297||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="303" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "148px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "493px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "11px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check42" checked={this.state.data.check42||false} id="1611545528325x23219" style={{backgroundColor: "white"}} tabIndex="304"/>
											<label htmlFor="1611545528325x23219"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "37px", width: "147px"}}>
										<input type="text" name="text296" value={this.state.data.text296||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="305" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "147px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "189px", width: "142px"}}>
										<input type="text" name="text295" value={this.state.data.text295||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="306" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "142px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "334px", width: "148px"}}>
										<input type="text" name="text294" value={this.state.data.text294||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="307" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "148px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "493px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "11px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check43" checked={this.state.data.check43||false} id="1611545528324x23159" style={{backgroundColor: "white"}} tabIndex="308"/>
											<label htmlFor="1611545528324x23159"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "76px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "155px", width: "601px"}}>
										<input type="text" name="text293" value={this.state.data.text293||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="309" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "601px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "162px", width: "594px"}}>
										<input type="text" name="text292" value={this.state.data.text292||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="310" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "594px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "143px", width: "613px"}}>
										<input type="text" name="text291" value={this.state.data.text291||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="311" style={{position: "absolute", boxSizing: "border-box", height: "24px", width: "613px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "68px", height: "16px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "35px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check44" checked={this.state.data.check44||false} id="1611545528329x23435" style={{backgroundColor: "white"}} tabIndex="312"/>
											<label htmlFor="1611545528329x23435"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "105px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "37px", width: "241px"}}>
										<input type="text" name="text248" value={this.state.data.text248||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="313" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "241px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "298px", width: "96px"}}>
										<input type="text" name="text290" value={this.state.data.text290||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="314" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "413px", width: "96px"}}>
										<input type="text" name="text250" value={this.state.data.text250||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="315" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "530px", width: "105px"}}>
										<input type="text" name="text251" value={this.state.data.text251||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="316" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "105px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "657px", width: "99px"}}>
										<input type="text" name="text252" value={this.state.data.text252||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="317" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "99px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "37px", width: "241px"}}>
										<input type="text" name="text253" value={this.state.data.text253||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="318" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "241px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "298px", width: "96px"}}>
										<input type="text" name="text254" value={this.state.data.text254||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="319" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "413px", width: "96px"}}>
										<input type="text" name="text255" value={this.state.data.text255||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="320" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "530px", width: "105px"}}>
										<input type="text" name="text256" value={this.state.data.text256||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="321" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "105px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "657px", width: "99px"}}>
										<input type="text" name="text257" value={this.state.data.text257||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="322" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "99px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "3px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "37px", width: "241px"}}>
										<input type="text" name="text258" value={this.state.data.text258||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="323" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "241px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "298px", width: "96px"}}>
										<input type="text" name="text259" value={this.state.data.text259||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="324" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "413px", width: "96px"}}>
										<input type="text" name="text260" value={this.state.data.text260||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="325" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "530px", width: "105px"}}>
										<input type="text" name="text261" value={this.state.data.text261||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="326" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "105px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "657px", width: "99px"}}>
										<input type="text" name="text262" value={this.state.data.text262||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="327" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "99px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "37px", width: "241px"}}>
										<input type="text" name="text263" value={this.state.data.text263||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="328" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "241px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "298px", width: "96px"}}>
										<input type="text" name="text264" value={this.state.data.text264||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="329" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "413px", width: "96px"}}>
										<input type="text" name="text265" value={this.state.data.text265||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="330" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "530px", width: "105px"}}>
										<input type="text" name="text266" value={this.state.data.text266||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="331" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "105px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "657px", width: "99px"}}>
										<input type="text" name="text267" value={this.state.data.text267||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="332" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "99px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "38px", width: "241px"}}>
										<input type="text" name="text268" value={this.state.data.text268||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="333" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "241px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "299px", width: "95px"}}>
										<input type="text" name="text269" value={this.state.data.text269||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="334" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "95px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "414px", width: "95px"}}>
										<input type="text" name="text270" value={this.state.data.text270||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="335" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "95px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "531px", width: "104px"}}>
										<input type="text" name="text271" value={this.state.data.text271||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="336" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "104px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "658px", width: "98px"}}>
										<input type="text" name="text272" value={this.state.data.text272||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="337" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "98px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "4px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "37px", width: "241px"}}>
										<input type="text" name="text273" value={this.state.data.text273||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="338" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "241px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "298px", width: "96px"}}>
										<input type="text" name="text274" value={this.state.data.text274||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="339" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "413px", width: "96px"}}>
										<input type="text" name="text275" value={this.state.data.text275||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="340" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "530px", width: "105px"}}>
										<input type="text" name="text276" value={this.state.data.text276||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="341" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "105px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "657px", width: "99px"}}>
										<input type="text" name="text277" value={this.state.data.text277||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="342" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "99px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition:  "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1611560774567x563082144356020350%2FMeal%2520Benefit%2520Form%2520-%2520Parent%2520%25281%2529-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "230px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "132px", width: "626px"}}>
										<input type="text" name="text278" value={this.state.data.text278||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="343" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "626px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "196px", width: "320px"}}>
										<input type="text" name="text279" value={this.state.data.text279||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="344" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "320px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "523px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "-1px", top: "9px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check45" checked={this.state.data.check45||false} id="1611545528459x25463" style={{backgroundColor: "white"}} tabIndex="345"/>
											<label htmlFor="1611545528459x25463"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "10px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "162px", width: "355px"}}>
										<Signature imageUrl={imageURL} type={"parent"}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "588px", width: "168px"}}>
										<input type="text" name="text281" value={today} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="347" style={{position: "absolute", boxSizing: "border-box", height: "22px", width: "168px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "473px", height: "16px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "39px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check46" checked={this.state.data.check46||false} id="1611545528464x25627" style={{backgroundColor: "white"}} tabIndex="348"/>
											<label htmlFor="1611545528464x25627"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "346px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check47" checked={this.state.data.check47||false} id="1611545528478x25867" style={{backgroundColor: "white"}} tabIndex="349"/>
											<label htmlFor="1611545528478x25867"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "516px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check48" checked={this.state.data.check48||false} id="1611545528480x25927" style={{backgroundColor: "white"}} tabIndex="350"/>
											<label htmlFor="1611545528480x25927"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "22px", height: "16px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "39px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check49" checked={this.state.data.check49||false} id="1611545528465x25687" style={{backgroundColor: "white"}} tabIndex="351"/>
											<label htmlFor="1611545528465x25687"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "516px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check50" checked={this.state.data.check50||false} id="1611545528483x25987" style={{backgroundColor: "white"}} tabIndex="352"/>
											<label htmlFor="1611545528483x25987"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "21px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "358px", width: "398px"}}>
										<input type="text" name="text282" value={this.state.data.text282||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="353" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "398px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "18px", height: "16px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "39px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "1px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check51" checked={this.state.data.check51||false} id="1611545528466x25747" style={{backgroundColor: "white"}} tabIndex="354"/>
											<label htmlFor="1611545528466x25747"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "345px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "1px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check52" checked={this.state.data.check52||false} id="1611545528467x25807" style={{backgroundColor: "white"}} tabIndex="355"/>
											<label htmlFor="1611545528467x25807"></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition:  "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1611560815244x915324213395793900%2FMeal%2520Benefit%2520Form%2520-%2520Parent%2520%25281%2529-3.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "691px", height: "16px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "467px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check53" checked={this.state.data.check53||false} id="1611545528503x26229" style={{backgroundColor: "white"}} tabIndex="356"/>
											<label htmlFor="1611545528503x26229"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "538px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check54" checked={this.state.data.check54||false} id="1611545528504x26290" style={{backgroundColor: "white"}} tabIndex="357"/>
											<label htmlFor="1611545528504x26290"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "19px", height: "16px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "292px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "1px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check55" checked={this.state.data.check55||false} id="1611545528505x26350" style={{backgroundColor: "white"}} tabIndex="358"/>
											<label htmlFor="1611545528505x26350"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "363px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "1px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check56" checked={this.state.data.check56||false} id="1611545528506x26410" style={{backgroundColor: "white"}} tabIndex="359"/>
											<label htmlFor="1611545528506x26410"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "57px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "130px", width: "228px"}}>
										<input type="text" name="text283" value={this.state.data.text283||''} onChange={this.onChange}className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="360" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "228px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "481px", width: "267px"}}>
										<input type="text" name="text284" value={this.state.data.text284||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="361" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "267px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "19px", height: "16px"}}>
									<div className="bubble-r-box" style={{height: "16px", left: "203px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check57" checked={this.state.data.check57||false} id="1611545528507x26470" style={{backgroundColor: "white"}} tabIndex="362"/>
											<label htmlFor="1611545528507x26470"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "278px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check58" checked={this.state.data.check58||false} id="1611545528508x26530" style={{backgroundColor: "white"}} tabIndex="363"/>
											<label htmlFor="1611545528508x26530"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "424px", width: "18px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", height: "16px", width: "18px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check59" checked={this.state.data.check59||false} id="1611545528509x26590" style={{backgroundColor: "white"}} tabIndex="364"/>
											<label htmlFor="1611545528509x26590"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "257px", width: "491px"}}>
										<input type="text" name="text285" value={this.state.data.text285||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="365" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "491px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "242px", width: "239px"}}>
										<input type="text" className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="366" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "239px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "612px", width: "136px"}}>
										<input type="text" name="text286" value={this.state.data.text286||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="367" style={{position: "absolute", boxSizing: "border-box", height: "25px", width: "136px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition:  "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1611560838569x691417709147401000%2FMeal%2520Benefit%2520Form%2520-%2520Parent%2520%25281%2529-4.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition:  "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1611560864011x782262815809269800%2FMeal%2520Benefit%2520Form%2520-%2520Parent%2520%25281%2529-5.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					{wherebutton}
				</form>
				)};
			};
		ChildDoc.propTypes = {
			updateUserInfo: PropTypes.func.isRequired,
			updateChildInfo: PropTypes.func.isRequired,
			auth: PropTypes.object.isRequired,
			userinfo: PropTypes.object.isRequired
		};
		const mapStateToProps = state => ({
			auth: state.auth,
			userinfo: state.userinfo
		});
		export default connect(mapStateToProps, { updateUserInfo, updateChildInfo })(ChildDoc);
    
    
    
    
    
    