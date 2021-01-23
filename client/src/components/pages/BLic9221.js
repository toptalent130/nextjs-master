// import {text} from 'body-parser'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserInfo, updateChildInfo } from '../../actions/userinfoAction';
import'./css/Genious_book.css'

class BLic9221 extends Component {
	constructor() {
		super();
		this.state = {
            userid: '',
			data: {},
			basicinfo:{},
		};
	this.onChange = this.onChange.bind(this);
	this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		this.setState({basicinfo: this.props.child,userid: this.props.userinfo._id});
		this.props.userinfo.children.forEach(element => {
			if(element._id === this.props.child._id){
				if(element.data){
					this.setState({basicinfo: this.props.child,userid: this.props.userinfo._id, data:element.data});
				}
			}
		});
	}
	componentWillMount() {
	}
	componentWillReceiveProps(nextProps) {
		this.setState({basicinfo: nextProps.child,userid: this.props.userinfo._id, data:{}});
		this.props.userinfo.children.forEach(element => {
			if(element._id === nextProps.child._id){
				if(element.data){
					this.setState({basicinfo: nextProps.child,userid: this.props.userinfo._id, data:element.data});
				}
			}
		});
	}
	onSubmit(e) {
		e.preventDefault();
		this.props.updateChildInfo(this.state);
	}
	onChange(e) {
		if(e.target.name.indexOf('check')){
			this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
		} else {
			this.setState({data:{...this.state.data,[e.target.name]:e.target.checked}});
		}
	}
	render() {
		const basicinfo = this.state.basicinfo;
		const userid = this.state.userid;
		let parentname = this.props.auth.user.name; 
		const subparentname = parentname.split(' ');
		const firstname = basicinfo.firstname;
		const middlename = basicinfo.middlename;
		const lastname = basicinfo.lastname
		const childname = firstname+' '+middlename+''+lastname;
		const birth = new Date(basicinfo.birthday);
		const childbirthday = birth.getFullYear()+'/'+birth.getMonth()+1+'/'+birth.getDay();
		const homeaddress = basicinfo.address;
		return (
				<form onSubmit={this.onSubmit} className="main-page bubble-element Page" style={{width: "794px", height: "44400px", minHeight: "100%", marginRight: "auto", marginLeft: "auto", position: "relative", zIndex: "1", top: "0px", overflow: "hidden", background: "none rgb(153, 153, 153)", boxSizing: "border-box"}}>
					<div className="bubble-r-line" id="prereview" style={{marginTop: "0px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "2", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941371426x302976545101989000%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-1.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "3", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941495319x314640227535036600%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "4", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941524951x574062393102647800%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-3.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "5", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941561299x638404239637288800%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-4.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "6", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941685782x105497941446586200%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-5.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "7", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941741943x134672761486949840%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-6.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "8", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941773635x128089991245821100%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-7.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "9", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941812829x378011652410828100%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-8.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "10", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941866191x773142338964219100%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-9.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "11", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609941919903x174376956175970100%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-11.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "12", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609942877927x751181037267291800%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-12.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "13", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609942935843x758670342921818200%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-13.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "14", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609942979258x796659344338952400%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-14.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "15", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943084431x698766481784552400%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-15.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "16", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943122440x496998494320360700%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-16.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "17", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943152345x256139643737427260%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-17.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "18", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943186903x425911229842207900%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-18.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "19", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943215181x749737036769804800%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-19.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "20", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943289577x383779172942011460%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-20.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "21", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943500659x899027800865421000%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-21.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "226px", height: "27px"}}>
									<div className="bubble-r-box" style={{height: "27px", left: "143px", width: "338px"}}>
										<input type="text" name="text1" value={childname} onChange={this.onChange}   onChange={this.onChange} className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="1" style={{position: "absolute", boxSizing: "border-box", zIndex: "2", height: "27px", width: "338px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "532px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "69px", width: "175px"}}>
										<input type="text" name="text2" value={parentname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="2" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "24px", width: "175px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "262px", width: "175px"}}>
										<input type="text" name="text3" value={this.state.data.text3||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="3" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "24px", width: "175px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "473px", width: "186px"}}>
										<input type="text" name="text4" value={this.state.data.text4||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="4" style={{position: "absolute", boxSizing: "border-box", zIndex: "5", height: "24px", width: "186px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "17px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "69px", width: "175px"}}>
										<input type="text" name="text5" value={this.state.data.text5||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="5" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "24px", width: "175px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "262px", width: "175px"}}>
										<input type="text" name="text6" value={this.state.data.text6||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="6" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "24px", width: "175px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "475px", width: "190px"}}>
										<input type="text" name="text7" value={this.state.data.text7||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="7" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "24px", width: "190px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "47px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "69px", width: "175px"}}>
										<input type="text" name="text8" value={this.state.data.text8||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="8" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "24px", width: "175px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "264px", width: "175px"}}>
										<input type="text" name="text9" value={this.state.data.text9||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="9" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "24px", width: "175px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "476px", width: "192px"}}>
										<input type="text" name="text10" value={this.state.data.text10||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="10" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "24px", width: "192px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "22", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943546842x784703437034044700%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-22.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "23", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943579471x611233716211568400%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-23.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "164px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "66px", width: "540px"}}>
										<input type="text" name="text11" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="11" style={{position: "absolute", boxSizing: "border-box", zIndex: "2", height: "26px", width: "540px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "25px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "69px", width: "204px"}}>
										<input type="text" name="text12" value={this.state.data.text12||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="12" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "26px", width: "204px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "304px", width: "204px"}}>
										<input type="text" name="text13" value={this.state.data.text13||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="13" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "26px", width: "204px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "521px", width: "204px"}}>
										<input type="text" name="text14" value={this.state.data.text14||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="14" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "26px", width: "204px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "24", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609943614107x211902242962870980%2F5A%2520_%25205B%2520New%2520Genius%2520Kids%2520Parent%2520Handbook%25202020-2021-24.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic9221" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "25", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944020534x500463531849239400%2FLIC9221.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "168px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "27px", left: "140px", width: "325px"}}>
										<input type="text" name="text15" value={this.state.data.text15||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="15" style={{position: "absolute", boxSizing: "border-box", zIndex: "2", height: "26px", width: "325px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "483px", width: "115px"}}>
										<input type="text" name="text16" value={this.state.data.text16||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="16" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "21px", width: "115px", left: "0px", top: "7px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "27px", left: "641px", width: "115px"}}>
										<input type="text" name="text17" value={this.state.data.text17||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="17" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "27px", width: "115px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "200px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "17px", width: "436px"}}>
										<input type="text" name="text18" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="18" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "22px", width: "436px", left: "0px", top: "6px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "545px", width: "224px"}}>
										<input type="text" name="text19" value={childbirthday} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="19" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "26px", width: "224px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "18px", width: "435px"}}>
										<input type="text" name="text20" value={this.state.data.text20||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="20" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "21px", width: "435px", left: "0px", top: "7px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "516px", width: "249px"}}>
										<input type="text" name="text21" value={this.state.data.text21||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="21" style={{position: "absolute", boxSizing: "border-box", zIndex: "5", height: "26px", width: "249px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "78px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "60px", width: "141px"}}>
										<input type="text" name="text22" value={this.state.data.text22||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="22" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "28px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "230px", width: "141px"}}>
										<input type="text" name="text23" value={this.state.data.text23||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="23" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "28px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "394px", width: "141px"}}>
										<input type="text" name="text24" value={this.state.data.text24||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="24" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "28px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "35px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "114px", width: "317px"}}>
										<input type="text" name="text25" value={this.state.data.text25||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="25" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "28px", width: "317px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "640px", width: "136px"}}>
										<input type="text" name="text26" value={this.state.data.text26||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="26" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "28px", width: "136px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "48px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "41px", width: "122px"}}>
										<input type="text" name="text27" value={this.state.data.text27||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="27" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "28px", width: "122px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "168px", width: "99px"}}>
										<input type="text" name="text28" value={this.state.data.text28||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="28" style={{position: "absolute", boxSizing: "border-box", zIndex: "10", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "353px", width: "304px"}}>
										<input type="text" name="text29" value={this.state.data.text29||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="29" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "122px"}}>
										<input type="text" name="text30" value={this.state.data.text30||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="30" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "28px", width: "122px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "167px", width: "99px"}}>
										<input type="text" name="text31" value={this.state.data.text31||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="31" style={{position: "absolute", boxSizing: "border-box", zIndex: "16", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "353px", width: "304px"}}>
										<input type="text" name="text32" value={this.state.data.text32||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="32" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "122px"}}>
										<input type="text" name="text33" value={this.state.data.text33||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="33" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "28px", width: "122px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "169px", width: "99px"}}>
										<input type="text" name="text34" value={this.state.data.text34||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="34" style={{position: "absolute", boxSizing: "border-box", zIndex: "16", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "354px", width: "304px"}}>
										<input type="text" name="text35" value={this.state.data.text35||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="35" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "122px"}}>
										<input type="text" name="text36" value={this.state.data.text36||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="36" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "28px", width: "122px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "169px", width: "99px"}}>
										<input type="text" name="text37" value={this.state.data.text37||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="37" style={{position: "absolute", boxSizing: "border-box", zIndex: "17", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "355px", width: "304px"}}>
										<input type="text" name="text38" value={this.state.data.text38||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="38" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "40px", width: "122px"}}>
										<input type="text" name="text39" value={this.state.data.text39||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="39" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "28px", width: "122px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "168px", width: "99px"}}>
										<input type="text" name="text40" value={this.state.data.text40||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="40" style={{position: "absolute", boxSizing: "border-box", zIndex: "18", height: "20px", width: "99px", left: "0px", top: "8px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "356px", width: "304px"}}>
										<input type="text" name="text41" value={this.state.data.text41||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="41" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "57px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "48px", width: "469px"}}>
										<input type="text" name="text42" value={this.state.data.text42||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="42" style={{position: "absolute", boxSizing: "border-box", zIndex: "14", height: "28px", width: "469px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "603px", width: "168px"}}>
										<input type="text" name="text43" value={this.state.data.text43||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="43" style={{position: "absolute", boxSizing: "border-box", zIndex: "15", height: "28px", width: "168px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic627" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "26", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944131990x515333030291619700%2FLIC627.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "192px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "41px", width: "304px"}}>
										<input type="text" name="text44" value={this.state.data.text44||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="44" style={{position: "absolute", boxSizing: "border-box", zIndex: "16", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "53px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "93px", width: "304px"}}>
										<input type="text" name="text45" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="45" style={{position: "absolute", boxSizing: "border-box", zIndex: "17", height: "28px", width: "304px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "173px", height: "433px"}}>
									<div className="bubble-r-box" style={{height: "433px", left: "30px", width: "718px"}}>
										<input type="textarea" onChange={this.onChange} name="text221" value={this.state.data.text221||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQURIED" maxLength="" tabIndex="46" style={{position: "absolute", boxSizing: "border-box", zIndex: "18", height: "433px", width: "718px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "15px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "121px", width: "129px"}}>
										<input type="text" name="text46" value={this.state.data.text46||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="47" style={{position: "absolute", boxSizing: "border-box", zIndex: "16", height: "28px", width: "129px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "30px", left: "482px", width: "238px"}}>
										<input type="text" name="text47" value={parentname} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength=""  tabIndex="48" style={{position: "absolute", boxSizing: "border-box", zIndex: "20", height: "30px", width: "238px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "40px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "86px", width: "371px"}}>
										<input type="text" name="text48" value={this.state.data.text48||''} onChange={this.onChange} className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="49" style={{position: "absolute", boxSizing: "border-box", zIndex: "21", height: "29px", width: "371px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "78px", width: "290px"}}>
										<input type="text" name="text49" value={this.state.data.text49||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="50" style={{position: "absolute", boxSizing: "border-box", zIndex: "22", height: "29px", width: "290px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "454px", width: "312px"}}>
										<input type="text" name="text50" value={this.state.data.text50||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="51" style={{position: "absolute", boxSizing: "border-box", zIndex: "22", height: "29px", width: "312px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic995A" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "27", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944188878x612278707106444700%2FLIC995.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "466px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "330px", width: "359px"}}>
										<input type="text" name="text51" value={this.state.data.text51||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="52" style={{position: "absolute", boxSizing: "border-box", zIndex: "2", height: "25px", width: "359px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "330px", width: "360px"}}>
										<input type="text" name="text52" value={this.state.data.text52||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="53" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "25px", width: "360px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "330px", width: "360px"}}>
										<input type="text" name="text53" value={this.state.data.text53||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="54" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "25px", width: "360px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "259px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "327px", width: "312px"}}>
										<input type="text" name="text54" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="55" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "25px", width: "312px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "39px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "284px", width: "232px"}}>
										<input type="text" name="text55" value={this.state.data.text55||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="56" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "20px", width: "232px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "141px", width: "218px"}}>
										<input type="text" name="text220" value={parentname} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength=""  tabIndex="57" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "25px", width: "218px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "508px", width: "107px"}}>
										<input type="text" name="text56" value={this.state.data.text56||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="58" style={{position: "absolute", boxSizing: "border-box", zIndex: "5", height: "25px", width: "107px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic613A" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "28", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944822505x515221670564402600%2FLIC613A.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "579px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "33px", width: "720px"}}>
										<input type="text" name="text57" value={parentname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="59" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "30px", width: "720px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "42px", width: "368px"}}>
										<input type="text" name="text58" value={this.state.data.text58||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="60" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "30px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "57px", width: "368px"}}>
										<input type="text" name="text59" value={this.state.data.text59||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="61" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "30px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "35px", width: "368px"}}>
										<input type="text" name="text60" value={this.state.data.text60||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="62" style={{position: "absolute", boxSizing: "border-box", zIndex: "5", height: "30px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "30px", left: "475px", width: "116px"}}>
										<input type="text" name="text61" value={this.state.data.text61||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="63" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "26px", width: "116px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "30px", left: "614px", width: "136px"}}>
										<input type="text" name="text62" value={this.state.data.text62||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="64" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "26px", width: "136px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "143px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "22px", width: "368px"}}>
										<input type="text" name="text63" value={this.state.data.text63||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="65" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "28px", width: "368px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "29px", left: "412px", width: "357px"}}>
										<input type="text" name="text64" value={this.state.data.text64||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="66" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "28px", width: "357px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "21px", width: "567px"}}>
										<input type="text" name="text65" value={childname} onChange={this.onChange}  className="bubble-element Input"  placeholder="REQURIED" maxLength="" tabIndex="67" style={{position: "absolute", boxSizing: "border-box", zIndex: "10", height: "28px", width: "567px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "17px", height: "27px"}}>
									<div className="bubble-r-box" style={{height: "27px", left: "20px", width: "570px"}}>
										<input type="text" name="text66" value={parentname} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength=""  tabIndex="68" style={{position: "absolute", boxSizing: "border-box", zIndex: "11", height: "27px", width: "570px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "29px"}}>
									<div className="bubble-r-box" style={{height: "29px", left: "20px", width: "571px"}}>
										<input type="text" name="text67" value={this.state.data.text67||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="69" style={{position: "absolute", boxSizing: "border-box", zIndex: "12", height: "28px", width: "571px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "29px", left: "610px", width: "159px"}}>
										<input type="text" name="text68" value={this.state.data.text68||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="70" style={{position: "absolute", boxSizing: "border-box", zIndex: "13", height: "29px", width: "159px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic702" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "29", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944908267x409824464875616600%2FLIC702-1.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "206px", height: "35px"}}>
									<div className="bubble-r-box" style={{height: "35px", left: "30px", width: "350px"}}>
										<input type="text" name="text69" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="71" style={{position: "absolute", boxSizing: "border-box", zIndex: "2", height: "35px", width: "350px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "35px", left: "411px", width: "85px"}}>
										<input type="text" name="text70" value={this.state.data.text70||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="72" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "33px", width: "85px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "533px", width: "225px"}}>
										<input type="text" name="text71" value={childbirthday} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="73" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "30px", width: "225px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "29px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "30px", width: "469px"}}>
										<input type="text" name="text72" value={this.state.data.text72||''} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="74" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "43px", width: "469px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "60px", left: "536px", width: "230px"}}>
										<input type="text" name="text73" value={this.state.data.text73||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="75" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "25px", width: "230px", left: "0px", top: "35px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "30px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "29px", width: "469px"}}>
										<input type="text" name="text74" value={this.state.data.text74||''} onChange={this.onChange}   className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="76" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "43px", width: "469px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "60px", left: "535px", width: "239px"}}>
										<input type="text" name="text75" value={this.state.data.text75||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="77" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "26px", width: "239px", left: "0px", top: "34px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "48px", height: "41px"}}>
									<div className="bubble-r-box" style={{height: "38px", left: "31px", width: "469px"}}>
										<input type="text" name="text76" value={this.state.data.text76||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="78" style={{position: "absolute", boxSizing: "border-box", zIndex: "5", height: "38px", width: "469px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "535px", width: "236px"}}>
										<input type="text" name="text77" value={this.state.data.text77||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="79" style={{position: "absolute", boxSizing: "border-box", zIndex: "10", height: "28px", width: "236px", left: "0px", top: "13px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "31px", height: "51px"}}>
									<div className="bubble-r-box" style={{height: "41px", left: "25px", width: "130px"}}>
										<input type="text" name="text78" value={this.state.data.text78||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="80" style={{position: "absolute", boxSizing: "border-box", zIndex: "11", height: "25px", width: "130px", left: "0px", top: "16px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "27px", left: "208px", width: "54px"}}>
										<input type="text" name="text79" value={this.state.data.text79||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="81" style={{position: "absolute", boxSizing: "border-box", zIndex: "37", height: "27px", width: "54px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "280px", width: "130px"}}>
										<input type="text" name="text80" value={this.state.data.text80||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="82" style={{position: "absolute", boxSizing: "border-box", zIndex: "12", height: "25px", width: "130px", left: "0px", top: "17px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "458px", width: "54px"}}>
										<input type="text" name="text81" value={this.state.data.text81||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="83" style={{position: "absolute", boxSizing: "border-box", zIndex: "36", height: "27px", width: "54px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "525px", width: "130px"}}>
										<input type="text" name="text82" value={this.state.data.text82||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="84" style={{position: "absolute", boxSizing: "border-box", zIndex: "12", height: "25px", width: "130px", left: "0px", top: "16px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "51px", left: "736px", width: "54px"}}>
										<input type="text" name="text83" value={this.state.data.text83||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="85" style={{position: "absolute", boxSizing: "border-box", zIndex: "38", height: "27px", width: "54px", left: "0px", top: "24px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "93px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "17px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "13", height: "15px", width: "19px", left: "0px", top: "7px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check1" value={this.state.data.check1} id="1610302661667x7098" style={{backgroundColor: "white"}} tabIndex="86"/>
											<label htmlFor="1610302661667x7098"></label>
										</div>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "14", height: "15px", width: "19px", left: "0px", top: "33px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check2" value={this.state.data.check2} id="1610302661668x7158" style={{backgroundColor: "white"}} tabIndex="87"/>
											<label htmlFor="1610302661668x7158"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "29px", left: "146px", width: "115px"}}>
										<input type="text" name="text84" value={this.state.data.text84||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="88" style={{position: "absolute", boxSizing: "border-box", zIndex: "22", height: "25px", width: "115px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "43px", left: "271px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "15", height: "15px", width: "19px", left: "1px", top: "6px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check3" value={this.state.data.check3} id="1610302661672x7338" style={{backgroundColor: "white"}} tabIndex="89"/>
											<label htmlFor="1610302661672x7338"></label>
										</div>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "18", height: "15px", width: "19px", left: "1px", top: "31px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check4" value={this.state.data.check4} id="1610302661674x7458" style={{backgroundColor: "white"}} tabIndex="90"/>
											<label htmlFor="1610302661674x7458"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "404px", width: "115px"}}>
										<input type="text" name="text85" value={this.state.data.text85||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="91" style={{position: "absolute", boxSizing: "border-box", zIndex: "25", height: "25px", width: "115px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "527px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "19", height: "15px", width: "19px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check5" value={this.state.data.check5} id="1610302661676x7518" style={{backgroundColor: "white"}} tabIndex="92"/>
											<label htmlFor="1610302661676x7518"></label>
										</div>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "20", height: "15px", width: "19px", left: "0px", top: "31px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check6" value={this.state.data.check6} id="1610302661677x7578" style={{backgroundColor: "white"}} tabIndex="93"/>
											<label htmlFor="1610302661677x7578"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "27px", left: "659px", width: "115px"}}>
										<input type="text" name="text86" value={this.state.data.text86||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="94" style={{position: "absolute", boxSizing: "border-box", zIndex: "29", height: "25px", width: "115px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "19px"}}>
									<div className="bubble-r-box" style={{height: "19px", left: "17px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "14", height: "15px", width: "19px", left: "0px", top: "6px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check7" value={this.state.data.check7} id="1610302661669x7218" style={{backgroundColor: "white"}} tabIndex="95"/>
											<label htmlFor="1610302661669x7218"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "271px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "15px", width: "19px", left: "1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check8" value={this.state.data.check8} id="1610302661692x8286" style={{backgroundColor: "white"}} tabIndex="96"/>
											<label htmlFor="1610302661692x8286"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "19px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "17px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "14", height: "15px", width: "19px", left: "0px", top: "14px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check9" value={this.state.data.check9} id="1610302661671x7278" style={{backgroundColor: "white"}} tabIndex="97"/>
											<label htmlFor="1610302661671x7278"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "271px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "17", height: "15px", width: "19px", left: "1px", top: "8px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check10" value={this.state.data.check10} id="1610302661673x7398" style={{backgroundColor: "white"}} tabIndex="98"/>
											<label htmlFor="1610302661673x7398"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "527px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "21", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check11" value={this.state.data.check11} id="1610302661679x7638" style={{backgroundColor: "white"}} tabIndex="99"/>
											<label htmlFor="1610302661679x7638"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "82px", height: "38px"}}>
									<div className="bubble-r-box" style={{height: "38px", left: "83px", width: "541px"}}>
										<input type="text" name="text87" value={this.state.data.text87||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="100" style={{position: "absolute", boxSizing: "border-box", zIndex: "30", height: "38px", width: "541px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "25px", height: "64px"}}>
									<div className="bubble-r-box" style={{height: "15px", left: "85px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "33", height: "15px", width: "19px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check12" value={this.state.data.check12} id="1610302661687x8010" style={{backgroundColor: "white"}} tabIndex="101"/>
											<label htmlFor="1610302661687x8010"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "146px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "34", height: "15px", width: "19px", left: "0px", top: "2px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check13" value={this.state.data.check13} id="1610302661688x8070" style={{backgroundColor: "white"}} tabIndex="102"/>
											<label htmlFor="1610302661688x8070"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "57px", left: "281px", width: "196px"}}>
										<input type="text" name="text88" value={this.state.data.text88||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="103" style={{position: "absolute", boxSizing: "border-box", zIndex: "31", height: "48px", width: "196px", left: "0px", top: "9px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "64px", left: "513px", width: "266px"}}>
										<input type="text" name="text89" value={this.state.data.text89||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="104" style={{position: "absolute", boxSizing: "border-box", zIndex: "32", height: "38px", width: "266px", left: "0px", top: "26px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "30", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609944960326x763816715774411400%2FLIC702-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "142px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "60px", width: "190px"}}>
										<input type="text" name="text90" value={this.state.data.text90||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="105" style={{position: "absolute", boxSizing: "border-box", zIndex: "36", height: "31px", width: "190px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "353px", width: "145px"}}>
										<input type="text" name="text91" value={this.state.data.text91||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="106" style={{position: "absolute", boxSizing: "border-box", zIndex: "37", height: "31px", width: "145px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "540px", width: "211px"}}>
										<input type="text" name="text92" value={this.state.data.text92||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="107" style={{position: "absolute", boxSizing: "border-box", zIndex: "38", height: "31px", width: "211px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "24px", height: "33px"}}>
									<div className="bubble-r-box" style={{height: "33px", left: "103px", width: "147px"}}>
										<input type="text" name="text93" value={this.state.data.text93||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="108" style={{position: "absolute", boxSizing: "border-box", zIndex: "41", height: "31px", width: "147px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "282px", width: "215px"}}>
										<input type="text" name="text94" value={this.state.data.text94||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="109" style={{position: "absolute", boxSizing: "border-box", zIndex: "40", height: "31px", width: "215px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "541px", width: "208px"}}>
										<input type="text" name="text95" value={this.state.data.text95||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="110" style={{position: "absolute", boxSizing: "border-box", zIndex: "39", height: "31px", width: "208px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "372px", width: "380px"}}>
										<input type="text" name="text96" value={this.state.data.text96||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="111" style={{position: "absolute", boxSizing: "border-box", zIndex: "42", height: "31px", width: "380px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "13px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "335px", width: "418px"}}>
										<input type="text" name="text97" value={this.state.data.text97||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="112" style={{position: "absolute", boxSizing: "border-box", zIndex: "43", height: "31px", width: "418px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "14px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "338px", width: "416px"}}>
										<input type="text" name="text98" value={this.state.data.text98||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="113" style={{position: "absolute", boxSizing: "border-box", zIndex: "44", height: "31px", width: "416px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "28px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "369px", width: "384px"}}>
										<input type="text" name="text99" value={this.state.data.text99||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="114" style={{position: "absolute", boxSizing: "border-box", zIndex: "45", height: "28px", width: "384px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "4px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "335px", width: "418px"}}>
										<input type="text" name="text100" value={this.state.data.text100||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="115" style={{position: "absolute", boxSizing: "border-box", zIndex: "46", height: "26px", width: "418px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "339px", width: "415px"}}>
										<input type="text" name="text101" value={this.state.data.text101||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="116" style={{position: "absolute", boxSizing: "border-box", zIndex: "47", height: "26px", width: "415px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "23px", height: "33px"}}>
									<div className="bubble-r-box" style={{height: "33px", left: "31px", width: "369px"}}>
										<input type="text" name="text102" value={this.state.data.text102||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="117" style={{position: "absolute", boxSizing: "border-box", zIndex: "63", height: "33px", width: "369px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "437px", width: "318px"}}>
										<input type="text" name="text103" value={this.state.data.text103||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="118" style={{position: "absolute", boxSizing: "border-box", zIndex: "49", height: "33px", width: "318px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "24px", height: "15px"}}>
									<div className="bubble-r-box" style={{height: "15px", left: "15px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "36", height: "15px", width: "19px", left: "1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check14" value={this.state.data.check14} id="1610302661741x9311" style={{backgroundColor: "white"}} tabIndex="119"/>
											<label htmlFor="1610302661741x9311"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "76px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "50", height: "15px", width: "19px", left: "1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check15" value={this.state.data.check15} id="1610302661742x9371" style={{backgroundColor: "white"}} tabIndex="120"/>
											<label htmlFor="1610302661742x9371"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "263px", width: "134px"}}>
										<input type="text" name="text104" value={this.state.data.text104||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="121" style={{position: "absolute", boxSizing: "border-box", zIndex: "48", height: "25px", width: "134px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "16px", left: "424px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "51", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check16" value={this.state.data.check16} id="1610302661744x9431" style={{backgroundColor: "white"}} tabIndex="122"/>
											<label htmlFor="1610302661744x9431"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "485px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "52", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check17" value={this.state.data.check17} id="1610302661746x9491" style={{backgroundColor: "white"}} tabIndex="123"/>
											<label htmlFor="1610302661746x9491"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "651px", width: "105px"}}>
										<input type="text" name="text105" value={this.state.data.text105||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="124" style={{position: "absolute", boxSizing: "border-box", zIndex: "53", height: "22px", width: "105px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "22px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "32px", left: "34px", width: "305px"}}>
										<input type="text" name="text106" value={this.state.data.text106||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="125" style={{position: "absolute", boxSizing: "border-box", zIndex: "54", height: "31px", width: "305px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "409px", width: "350px"}}>
										<input type="text" name="text107" value={this.state.data.text107||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="126" style={{position: "absolute", boxSizing: "border-box", zIndex: "55", height: "31px", width: "350px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "29px", height: "42px"}}>
									<div className="bubble-r-box" style={{height: "42px", left: "32px", width: "730px"}}>
										<input type="text" name="text108" value={this.state.data.text108||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="127" style={{position: "absolute", boxSizing: "border-box", zIndex: "56", height: "42px", width: "730px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "77px", height: "54px"}}>
									<div className="bubble-r-box" style={{height: "15px", left: "15px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "61", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check18" value={this.state.data.check18} id="1610302661759x10163" style={{backgroundColor: "white"}} tabIndex="128"/>
											<label htmlFor="1610302661759x10163"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "15px", left: "77px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "58", height: "15px", width: "19px", left: "0px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check19" value={this.state.data.check19} id="1610302661752x9819" style={{backgroundColor: "white"}} tabIndex="129"/>
											<label htmlFor="1610302661752x9819"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "45px", left: "265px", width: "125px"}}>
										<input type="text" name="text109" value={this.state.data.text109||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="130" style={{position: "absolute", boxSizing: "border-box", zIndex: "59", height: "40px", width: "125px", left: "0px", top: "5px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "410px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "58", height: "15px", width: "19px", left: "2px", top: "21px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check20" value={this.state.data.check20} id="1610302661753x9879" style={{backgroundColor: "white"}} tabIndex="131"/>
											<label htmlFor="1610302661753x9879"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "472px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "58", height: "15px", width: "19px", left: "1px", top: "21px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check21" value={this.state.data.check21} id="1610302661754x9939" style={{backgroundColor: "white"}} tabIndex="132"/>
											<label htmlFor="1610302661754x9939"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "54px", left: "613px", width: "132px"}}>
										<input type="text" name="text110" value={this.state.data.text110||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="133" style={{position: "absolute", boxSizing: "border-box", zIndex: "60", height: "35px", width: "132px", left: "0px", top: "19px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "30px", height: "55px"}}>
									<div className="bubble-r-box" style={{height: "28px", left: "15px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "57", height: "15px", width: "19px", left: "0px", top: "17px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check22" value={this.state.data.check22} id="1610302661751x9759" style={{backgroundColor: "white"}} tabIndex="134"/>
											<label htmlFor="1610302661751x9759"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "28px", left: "76px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "61", height: "15px", width: "19px", left: "1px", top: "17px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check23" value={this.state.data.check23} id="1610302661758x10103" style={{backgroundColor: "white"}} tabIndex="135"/>
											<label htmlFor="1610302661758x10103"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "40px", left: "264px", width: "126px"}}>
										<input type="text" name="text111" value={this.state.data.text111||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="136" style={{position: "absolute", boxSizing: "border-box", zIndex: "62", height: "40px", width: "126px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "412px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "61", height: "15px", width: "19px", left: "0px", top: "35px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check24" value={this.state.data.check24} id="1610302661761x10223" style={{backgroundColor: "white"}} tabIndex="137"/>
											<label htmlFor="1610302661761x10223"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "473px", width: "19px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "61", height: "15px", width: "19px", left: "0px", top: "35px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check25" value={this.state.data.check25} id="1610302661762x10283" style={{backgroundColor: "white"}} tabIndex="138"/>
											<label htmlFor="1610302661762x10283"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "55px", left: "617px", width: "128px"}}>
										<input type="text" name="text112" value={this.state.data.text112||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="139" style={{position: "absolute", boxSizing: "border-box", zIndex: "62", height: "40px", width: "128px", left: "0px", top: "15px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "32px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "31px", width: "735px"}}>
										<input type="text" name="text113" value={this.state.data.text113||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="140" style={{position: "absolute", boxSizing: "border-box", zIndex: "62", height: "60px", width: "735px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "31", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945005779x741265500833969300%2FLIC702-3.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "146px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "29px", width: "741px"}}>
										<input type="text" name="text114" value={this.state.data.text114||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="141" style={{position: "absolute", boxSizing: "border-box", zIndex: "63", height: "60px", width: "741px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "43px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "31px", width: "738px"}}>
										<input type="text" name="text115" value={this.state.data.text115||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="142" style={{position: "absolute", boxSizing: "border-box", zIndex: "64", height: "60px", width: "738px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "56px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "29px", width: "739px"}}>
										<input type="text" name="text116" value={this.state.data.text116||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="143" style={{position: "absolute", boxSizing: "border-box", zIndex: "65", height: "60px", width: "739px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "61px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "30px", width: "738px"}}>
										<input type="text" name="text117" value={this.state.data.text117||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="144" style={{position: "absolute", boxSizing: "border-box", zIndex: "66", height: "60px", width: "738px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "54px", height: "60px"}}>
									<div className="bubble-r-box" style={{height: "60px", left: "30px", width: "739px"}}>
										<input type="text" name="text118" value={this.state.data.text118||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="145" style={{position: "absolute", boxSizing: "border-box", zIndex: "67", height: "60px", width: "739px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "41px", height: "43px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "48px", width: "368px"}}>
										<input type="text" name="text119" value={parentname} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength=""  tabIndex="146" style={{position: "absolute", boxSizing: "border-box", zIndex: "68", height: "41px", width: "368px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "507px", width: "260px"}}>
										<input type="text" name="text120" value={this.state.data.text120||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="147" style={{position: "absolute", boxSizing: "border-box", zIndex: "69", height: "41px", width: "260px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic700" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "32", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945041122x483330148230868740%2FLIC700-1.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "243px", height: "34px"}}>
									<div className="bubble-r-box" style={{height: "33px", left: "144px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text222" value={this.state.data.text222||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="148" style={{position: "absolute", boxSizing: "border-box", zIndex: "136", height: "30px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "301px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text223" value={this.state.data.text223||''}  className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="OPTIONAL" maxLength="" tabIndex="149" style={{position: "absolute", boxSizing: "border-box", zIndex: "137", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "445px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text224" value={this.state.data.text224||''}  className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="150" style={{position: "absolute", boxSizing: "border-box", zIndex: "137", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "595px", width: "59px"}}>
										<input type="text" name="text121" value={this.state.data.text121||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="151" style={{position: "absolute", boxSizing: "border-box", zIndex: "75", height: "32px", width: "59px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "673px", width: "99px"}}>
										<input type="text" name="text122" value={this.state.data.text122||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="152" style={{position: "absolute", boxSizing: "border-box", zIndex: "76", height: "32px", width: "99px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "23px", height: "34px"}}>
									<div className="bubble-r-box" style={{height: "34px", left: "145px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text225" value={this.state.data.text225||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="153" style={{position: "absolute", boxSizing: "border-box", zIndex: "137", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "34px", left: "264px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text226" value={this.state.data.text226||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="154" style={{position: "absolute", boxSizing: "border-box", zIndex: "137", height: "30px", width: "115px", left: "0px", top: "4px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "384px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text227" value={this.state.data.text227||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="155" style={{position: "absolute", boxSizing: "border-box", zIndex: "137", height: "30px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "504px", width: "83px"}}>
										<input type="textarea" onChange={this.onChange} name="text228" value={this.state.data.text228||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="156" style={{position: "absolute", boxSizing: "border-box", zIndex: "137", height: "30px", width: "83px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "591px", width: "72px"}}>
										<input type="text" name="text123" value={this.state.data.text123||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="157" style={{position: "absolute", boxSizing: "border-box", zIndex: "84", height: "32px", width: "72px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "674px", width: "100px"}}>
										<input type="text" name="text124" value={this.state.data.text124||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="158" style={{position: "absolute", boxSizing: "border-box", zIndex: "77", height: "32px", width: "100px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "25px", height: "52px"}}>
									<div className="bubble-r-box" style={{height: "52px", left: "172px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text229" value={this.state.data.text229||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="159" style={{position: "absolute", boxSizing: "border-box", zIndex: "138", height: "52px", width: "115px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "51px", left: "311px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text230" value={this.state.data.text230||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="160" style={{position: "absolute", boxSizing: "border-box", zIndex: "138", height: "50px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "52px", left: "455px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text231" value={this.state.data.text231||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="161" style={{position: "absolute", boxSizing: "border-box", zIndex: "138", height: "51px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "48px", left: "674px", width: "100px"}}>
										<input type="text" name="text125" value={this.state.data.text125||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="162" style={{position: "absolute", boxSizing: "border-box", zIndex: "78", height: "32px", width: "100px", left: "0px", top: "16px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "29px", height: "47px"}}>
									<div className="bubble-r-box" style={{height: "41px", left: "149px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text232" value={this.state.data.text232||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="163" style={{position: "absolute", boxSizing: "border-box", zIndex: "141", height: "40px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "268px", width: "109px"}}>
										<input type="textarea" onChange={this.onChange} name="text233" value={this.state.data.text233||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="164" style={{position: "absolute", boxSizing: "border-box", zIndex: "141", height: "41px", width: "109px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "381px", width: "120px"}}>
										<input type="textarea" onChange={this.onChange} name="text234" value={this.state.data.text234||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="165" style={{position: "absolute", boxSizing: "border-box", zIndex: "141", height: "42px", width: "120px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "505px", width: "82px"}}>
										<input type="textarea" onChange={this.onChange} name="text235" value={this.state.data.text235||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="166" style={{position: "absolute", boxSizing: "border-box", zIndex: "141", height: "44px", width: "82px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "589px", width: "75px"}}>
										<input type="text" name="text126" value={this.state.data.text126||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="167" style={{position: "absolute", boxSizing: "border-box", zIndex: "94", height: "31px", width: "75px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "673px", width: "100px"}}>
										<input type="text" name="text127" value={this.state.data.text127||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="168" style={{position: "absolute", boxSizing: "border-box", zIndex: "99", height: "32px", width: "100px", left: "0px", top: "15px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "49px"}}>
									<div className="bubble-r-box" style={{height: "47px", left: "172px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text236" value={this.state.data.text236||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="169" style={{position: "absolute", boxSizing: "border-box", zIndex: "138", height: "47px", width: "115px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "48px", left: "309px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text237" value={this.state.data.text237||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="170" style={{position: "absolute", boxSizing: "border-box", zIndex: "138", height: "47px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "49px", left: "455px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text238" value={this.state.data.text238||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="171" style={{position: "absolute", boxSizing: "border-box", zIndex: "138", height: "48px", width: "115px", left: "0px", top: "1px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "674px", width: "100px"}}>
										<input type="text" name="text128" value={this.state.data.text128||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="172" style={{position: "absolute", boxSizing: "border-box", zIndex: "100", height: "32px", width: "100px", left: "0px", top: "15px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "26px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "43px", left: "152px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text239" value={this.state.data.text239||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="173" style={{position: "absolute", boxSizing: "border-box", zIndex: "140", height: "40px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "271px", width: "109px"}}>
										<input type="textarea" onChange={this.onChange} name="text240" value={this.state.data.text240||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="174" style={{position: "absolute", boxSizing: "border-box", zIndex: "140", height: "41px", width: "109px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "384px", width: "120px"}}>
										<input type="textarea" onChange={this.onChange} name="text241" value={this.state.data.text241||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="175" style={{position: "absolute", boxSizing: "border-box", zIndex: "140", height: "42px", width: "120px", left: "0px", top: "2px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "46px", left: "507px", width: "83px"}}>
										<input type="textarea" onChange={this.onChange} name="text242" value={this.state.data.text242||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="176" style={{position: "absolute", boxSizing: "border-box", zIndex: "140", height: "44px", width: "83px", left: "0px", top: "2px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "592px", width: "75px"}}>
										<input type="text" name="text129" value={this.state.data.text129||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="177" style={{position: "absolute", boxSizing: "border-box", zIndex: "140", height: "32px", width: "75px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "674px", width: "100px"}}>
										<input type="text" name="text130" value={this.state.data.text130||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="178" style={{position: "absolute", boxSizing: "border-box", zIndex: "101", height: "27px", width: "100px", left: "0px", top: "17px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "21px", height: "48px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "149px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text243" value={this.state.data.text243||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="179" style={{position: "absolute", boxSizing: "border-box", zIndex: "142", height: "46px", width: "115px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "48px", left: "271px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text244" value={this.state.data.text244||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="180" style={{position: "absolute", boxSizing: "border-box", zIndex: "142", height: "45px", width: "115px", left: "0px", top: "3px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "46px", left: "404px", width: "115px"}}>
										<input type="textarea" onChange={this.onChange} name="text245" value={this.state.data.text245||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="181" style={{position: "absolute", boxSizing: "border-box", zIndex: "142", height: "44px", width: "115px", left: "0px", top: "2px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "558px", width: "100px"}}>
										<input type="text" name="text131" value={this.state.data.text131||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="182" style={{position: "absolute", boxSizing: "border-box", zIndex: "103", height: "27px", width: "100px", left: "0px", top: "20px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "47px", left: "674px", width: "100px"}}>
										<input type="text" name="text132" value={this.state.data.text132||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="183" style={{position: "absolute", boxSizing: "border-box", zIndex: "102", height: "27px", width: "100px", left: "0px", top: "20px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "54px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "25px", width: "160px"}}>
										<input type="text" name="text133" value={this.state.data.text133||''} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="184" style={{position: "absolute", boxSizing: "border-box", zIndex: "104", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "216px", width: "160px"}}>
										<input type="text" name="text134" value={this.state.data.text134||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="185" style={{position: "absolute", boxSizing: "border-box", zIndex: "111", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "413px", width: "160px"}}>
										<input type="text" name="text135" value={this.state.data.text135||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="186" style={{position: "absolute", boxSizing: "border-box", zIndex: "115", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "599px", width: "160px"}}>
										<input type="text" name="text136" value={this.state.data.text136||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="187" style={{position: "absolute", boxSizing: "border-box", zIndex: "119", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "3px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "21px", left: "26px", width: "160px"}}>
										<input type="text" name="text137" value={this.state.data.text137||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="188" style={{position: "absolute", boxSizing: "border-box", zIndex: "108", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "216px", width: "160px"}}>
										<input type="text" name="text138" value={this.state.data.text138||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="189" style={{position: "absolute", boxSizing: "border-box", zIndex: "112", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "413px", width: "160px"}}>
										<input type="text" name="text139" value={this.state.data.text139||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="190" style={{position: "absolute", boxSizing: "border-box", zIndex: "116", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "600px", width: "160px"}}>
										<input type="text" name="text140" value={this.state.data.text140||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="191" style={{position: "absolute", boxSizing: "border-box", zIndex: "120", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "21px", left: "25px", width: "160px"}}>
										<input type="text" name="text141" value={this.state.data.text141||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="192" style={{position: "absolute", boxSizing: "border-box", zIndex: "109", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "216px", width: "160px"}}>
										<input type="text" name="text142" value={this.state.data.text142||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="193" style={{position: "absolute", boxSizing: "border-box", zIndex: "113", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "414px", width: "160px"}}>
										<input type="text" name="text143" value={this.state.data.text143||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="194" style={{position: "absolute", boxSizing: "border-box", zIndex: "117", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "600px", width: "160px"}}>
										<input type="text" name="text144" value={this.state.data.text144||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="195" style={{position: "absolute", boxSizing: "border-box", zIndex: "121", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "2px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "25px", width: "160px"}}>
										<input type="text" name="text145" value={this.state.data.text145||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="196" style={{position: "absolute", boxSizing: "border-box", zIndex: "110", height: "20px", width: "160px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "218px", width: "160px"}}>
										<input type="text" name="text146" value={this.state.data.text146||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="197" style={{position: "absolute", boxSizing: "border-box", zIndex: "114", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "415px", width: "160px"}}>
										<input type="text" name="text147" value={this.state.data.text147||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="198" style={{position: "absolute", boxSizing: "border-box", zIndex: "118", height: "20px", width: "160px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "600px", width: "160px"}}>
										<input type="text" name="text148" value={this.state.data.text148||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="199" style={{position: "absolute", boxSizing: "border-box", zIndex: "122", height: "20px", width: "160px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "44px", height: "44px"}}>
									<div className="bubble-r-box" style={{height: "40px", left: "26px", width: "159px"}}>
										<input type="text" name="text149" value={this.state.data.text149||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="200" style={{position: "absolute", boxSizing: "border-box", zIndex: "123", height: "40px", width: "159px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "219px", width: "159px"}}>
										<input type="text" name="text150" value={this.state.data.text150||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="201" style={{position: "absolute", boxSizing: "border-box", zIndex: "124", height: "40px", width: "159px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "44px", left: "412px", width: "210px"}}>
										<input type="text" name="text151" value={this.state.data.text151||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="202" style={{position: "absolute", boxSizing: "border-box", zIndex: "125", height: "40px", width: "210px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "40px", left: "666px", width: "120px"}}>
										<input type="text" name="text152" value={this.state.data.text152||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="203" style={{position: "absolute", boxSizing: "border-box", zIndex: "129", height: "40px", width: "120px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "20px", height: "42px"}}>
									<div className="bubble-r-box" style={{height: "42px", left: "24px", width: "159px"}}>
										<input type="text" name="text153" value={this.state.data.text153||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="204" style={{position: "absolute", boxSizing: "border-box", zIndex: "127", height: "40px", width: "159px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "40px", left: "218px", width: "159px"}}>
										<input type="text" name="text154" value={this.state.data.text154||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="205" style={{position: "absolute", boxSizing: "border-box", zIndex: "126", height: "40px", width: "159px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "42px", left: "410px", width: "208px"}}>
										<input type="text" name="text155" value={this.state.data.text155||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="206" style={{position: "absolute", boxSizing: "border-box", zIndex: "128", height: "40px", width: "208px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "41px", left: "665px", width: "115px"}}>
										<input type="text" name="text156" value={this.state.data.text156||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="207" style={{position: "absolute", boxSizing: "border-box", zIndex: "130", height: "40px", width: "115px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "22px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "17px", left: "16px", width: "14px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "143", height: "11px", width: "14px", left: "2px", top: "8px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check26" value={this.state.data.check26} id="1610302661897x16393" style={{backgroundColor: "white"}} tabIndex="208"/>
											<label htmlFor="1610302661897x16393"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "17px", left: "322px", width: "14px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "132", height: "11px", width: "14px", left: "2px", top: "8px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check27" value={this.state.data.check27} id="1610302661866x13133" style={{backgroundColor: "white"}} tabIndex="209"/>
											<label htmlFor="1610302661866x13133"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "502px", width: "260px"}}>
										<input type="text" name="text157" value={this.state.data.text157||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="210" style={{position: "absolute", boxSizing: "border-box", zIndex: "133", height: "20px", width: "260px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "33", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945087135x604709109348207100%2FLIC700-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "187px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "36px", width: "327px"}}>
										<input type="text" name="text158" value={this.state.data.text158||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="211" style={{position: "absolute", boxSizing: "border-box", zIndex: "134", height: "23px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "427px", width: "327px"}}>
										<input type="text" name="text159" value={this.state.data.text159||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="212" style={{position: "absolute", boxSizing: "border-box", zIndex: "143", height: "20px", width: "327px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "36px", width: "327px"}}>
										<input type="text" name="text160" value={this.state.data.text160||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="213" style={{position: "absolute", boxSizing: "border-box", zIndex: "135", height: "23px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "427px", width: "327px"}}>
										<input type="text" name="text161" value={this.state.data.text161||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="214" style={{position: "absolute", boxSizing: "border-box", zIndex: "142", height: "20px", width: "327px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "24px", left: "36px", width: "327px"}}>
										<input type="text" name="text162" value={this.state.data.text162||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="215" style={{position: "absolute", boxSizing: "border-box", zIndex: "136", height: "24px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "428px", width: "327px"}}>
										<input type="text" name="text163" value={this.state.data.text163||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="216" style={{position: "absolute", boxSizing: "border-box", zIndex: "141", height: "20px", width: "327px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "26px", left: "37px", width: "327px"}}>
										<input type="text" name="text164" value={this.state.data.text164||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="217" style={{position: "absolute", boxSizing: "border-box", zIndex: "137", height: "23px", width: "327px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "428px", width: "327px"}}>
										<input type="text" name="text165" value={this.state.data.text165||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="218" style={{position: "absolute", boxSizing: "border-box", zIndex: "140", height: "20px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "37px", width: "327px"}}>
										<input type="text" name="text166" value={this.state.data.text166||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="219" style={{position: "absolute", boxSizing: "border-box", zIndex: "138", height: "22px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "429px", width: "327px"}}>
										<input type="text" name="text167" value={this.state.data.text167||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="220" style={{position: "absolute", boxSizing: "border-box", zIndex: "139", height: "20px", width: "327px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "11px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "288px", width: "465px"}}>
										<input type="text" name="text168" value={this.state.data.text168||''} onChange={this.onChange}  className="bubble-element Input" placeholder="OPTIONAL" maxLength="" tabIndex="221" style={{position: "absolute", boxSizing: "border-box", zIndex: "144", height: "20px", width: "465px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "37px"}}>
									<div className="bubble-r-box" style={{height: "37px", left: "23px", width: "563px"}}>
										<input type="text" name="text169" value={parentname} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="222" style={{position: "absolute", boxSizing: "border-box", zIndex: "145", height: "34px", width: "563px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "636px", width: "134px"}}>
										<input type="text" name="text170" value={this.state.data.text170||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="223" style={{position: "absolute", boxSizing: "border-box", zIndex: "146", height: "33px", width: "134px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "67px", height: "31px"}}>
									<div className="bubble-r-box" style={{height: "31px", left: "26px", width: "353px"}}>
										<input type="text" name="text171" value={this.state.data.text171||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="224" style={{position: "absolute", boxSizing: "border-box", zIndex: "147", height: "27px", width: "353px", left: "0px", top: "4px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "31px", left: "416px", width: "358px"}}>
										<input type="text" name="text172" value={this.state.data.text172||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQURIED" maxLength="" tabIndex="225" style={{position: "absolute", boxSizing: "border-box", zIndex: "148", height: "31px", width: "358px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="lic995E" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "34", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945171274x547724564724042300%2FLIC995E.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "35", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609945576889x317603967675586400%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-2.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}></div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="sunscreen" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "36", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609946778771x908181098849470700%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-42.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "568px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "32px", left: "152px", width: "289px"}}>
										<input type="text" name="text173" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="226" style={{position: "absolute", boxSizing: "border-box", zIndex: "2", height: "32px", width: "289px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "517px", width: "225px"}}>
										<input type="text" name="text174" value={this.state.data.text174||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="227" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "32px", width: "225px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "33px"}}>
									<div className="bubble-r-box" style={{height: "32px", left: "164px", width: "289px"}}>
										<input type="text" name="text175" value={this.state.data.text175||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="228" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "32px", width: "289px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "33px", left: "545px", width: "198px"}}>
										<input type="text" name="text176" value={this.state.data.text176||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="229" style={{position: "absolute", boxSizing: "border-box", zIndex: "5", height: "32px", width: "198px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "23px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "280px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "19px", width: "24px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check28" value={this.state.data.check28} id="1610302662016x18031" style={{backgroundColor: "white"}} tabIndex="230"/>
											<label htmlFor="1610302662016x18031"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "19px", left: "521px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "19px", width: "24px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check29" value={this.state.data.check29} id="1610302662017x18091" style={{backgroundColor: "white"}} tabIndex="231"/>
											<label htmlFor="1610302662017x18091"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "38px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "21px", left: "396px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "19px", width: "24px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check30" value={this.state.data.check30} id="1610302662018x18151" style={{backgroundColor: "white"}} tabIndex="232"/>
											<label htmlFor="1610302662018x18151"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "19px", left: "642px", width: "24px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "19px", width: "24px", left: "2-px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check31" value={this.state.data.check31} id="1610302662019x18211" style={{backgroundColor: "white"}} tabIndex="233"/>
											<label htmlFor="1610302662019x18211"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "158px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "41px", width: "256px"}}>
										<input type="text" name="text177" value={this.state.data.text177||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength=""  tabIndex="234" style={{position: "absolute", boxSizing: "border-box", zIndex: "10", height: "25px", width: "256px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "25px", left: "401px", width: "177px"}}>
										<input type="text" name="text178" value={this.state.data.text178||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="235" style={{position: "absolute", boxSizing: "border-box", zIndex: "11", height: "25px", width: "177px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "78px", height: "26px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "46px", width: "256px"}}>
										<input type="text" name="text179" value={this.state.data.text179||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="236" style={{position: "absolute", boxSizing: "border-box", zIndex: "13", height: "25px", width: "256px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "26px", left: "403px", width: "177px"}}>
										<input type="text" name="text180" value={this.state.data.text180||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="237" style={{position: "absolute", boxSizing: "border-box", zIndex: "12", height: "25px", width: "177px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="diaper_rash" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "37", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609946877646x650835344988678100%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-43.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "418px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "418px", width: "256px"}}>
										<input type="text" name="text181" value={this.state.data.text181||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="238" style={{position: "absolute", boxSizing: "border-box", zIndex: "14", height: "25px", width: "256px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "27px", height: "25px"}}>
									<div className="bubble-r-box" style={{height: "25px", left: "154px", width: "357px"}}>
										<input type="text" name="text182" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="239" style={{position: "absolute", boxSizing: "border-box", zIndex: "15", height: "25px", width: "357px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "30px", height: "72px"}}>
									<div className="bubble-r-box" style={{height: "72px", left: "65px", width: "665px"}}>
										<input type="textarea" onChange={this.onChange} name="text246" value={this.state.data.text246||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED
						" maxLength="" tabIndex="240" style={{position: "absolute", boxSizing: "border-box", zIndex: "21", height: "72px", width: "665px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "139px", height: "32px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "65px", width: "283px"}}>
										<input type="text" name="text183" value={this.state.data.text183||''} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="241" style={{position: "absolute", boxSizing: "border-box", zIndex: "19", height: "30px", width: "283px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "32px", left: "390px", width: "180px"}}>
										<input type="text" name="text184" value={this.state.data.text184||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="242" style={{position: "absolute", boxSizing: "border-box", zIndex: "20", height: "30px", width: "180px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="infant_need" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "38", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609946996695x265852081762884450%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-6.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "150px", height: "30px"}}>
									<div className="bubble-r-box" style={{height: "30px", left: "175px", width: "463px"}}>
										<input type="text" name="text185" value={childname} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="243" style={{position: "absolute", boxSizing: "border-box", zIndex: "21", height: "30px", width: "463px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "168px", width: "157px"}}>
										<input type="text" name="text186" value={childbirthday} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="244" style={{position: "absolute", boxSizing: "border-box", zIndex: "22", height: "23px", width: "157px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "531px", width: "157px"}}>
										<input type="text" name="text187" value={this.state.data.text187||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="245" style={{position: "absolute", boxSizing: "border-box", zIndex: "23", height: "21px", width: "157px", left: "0px", top: "3px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "149px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "451px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "41", height: "20px", width: "25px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check32" value={this.state.data.check32} id="1610302662062x19424" style={{backgroundColor: "white"}} tabIndex="247"/>
											<label htmlFor="1610302662062x19424"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "554px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "42", height: "20px", width: "25px", left: "-2px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check33" value={this.state.data.check33} id="1610302662063x19484" style={{backgroundColor: "white"}} tabIndex="248"/>
											<label htmlFor="1610302662063x19484"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "336px", width: "141px"}}>
										<input type="text" name="text188" value={this.state.data.text188||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="246" style={{position: "absolute", boxSizing: "border-box", zIndex: "24", height: "20px", width: "141px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "344px", width: "270px"}}>
										<input type="text" name="text189" value={this.state.data.text189||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="249" style={{position: "absolute", boxSizing: "border-box", zIndex: "25", height: "20px", width: "270px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "533px", width: "50px"}}>
										<input type="text" name="text190" value={this.state.data.text190||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="250" style={{position: "absolute", boxSizing: "border-box", zIndex: "26", height: "20px", width: "50px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "526px", width: "170px"}}>
										<input type="text" name="text191" value={this.state.data.text191||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="251" style={{position: "absolute", boxSizing: "border-box", zIndex: "27", height: "20px", width: "170px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "198px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "409px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "43", height: "20px", width: "25px", left: "-1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check34" value={this.state.data.check34} id="1610302662064x19544" style={{backgroundColor: "white"}} tabIndex="252"/>
											<label htmlFor="1610302662064x19544"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "494px", width: "25px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "44", height: "20px", width: "25px", left: "-1px", top: "3px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check35" value={this.state.data.check35} id="1610302662064x19604" style={{backgroundColor: "white"}} tabIndex="253"/>
											<label htmlFor="1610302662064x19604"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "33px", height: "44px"}}>
									<div className="bubble-r-box" style={{height: "44px", left: "63px", width: "648px"}}>
										<input type="textarea" onChange={this.onChange} name="text247" value={this.state.data.text247||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="254" style={{position: "absolute", boxSizing: "border-box", zIndex: "53", height: "44px", width: "648px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "36px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "81px", width: "601px"}}>
										<input type="text" name="text192" value={this.state.data.text192||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="255" style={{position: "absolute", boxSizing: "border-box", zIndex: "47", height: "20px", width: "601px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "40px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "82px", width: "601px"}}>
										<input type="text" name="text193" value={this.state.data.text193||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="256" style={{position: "absolute", boxSizing: "border-box", zIndex: "48", height: "20px", width: "601px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "14px", height: "21px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "455px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "50", height: "20px", width: "22px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check36" value={this.state.data.check36} id="1610302662068x19820" style={{backgroundColor: "white"}} tabIndex="258"/>
											<label htmlFor="1610302662068x19820"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "21px", left: "510px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "51", height: "20px", width: "22px", left: "0px", top: "5px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check37" value={this.state.data.check37} id="1610302662069x19880" style={{backgroundColor: "white"}} tabIndex="259"/>
											<label htmlFor="1610302662069x19880"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "83px", width: "601px"}}>
										<input type="text" name="text194" value={this.state.data.text194||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="257" style={{position: "absolute", boxSizing: "border-box", zIndex: "49", height: "20px", width: "601px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "9px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "388px", width: "313px"}}>
										<input type="text" name="text195" value={this.state.data.text195||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="260" style={{position: "absolute", boxSizing: "border-box", zIndex: "52", height: "20px", width: "313px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "22px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "39", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609947042233x221756904492174100%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-7.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "293px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "70px", width: "108px"}}>
										<input type="text" name="text196" value={this.state.data.text196||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="261" style={{position: "absolute", boxSizing: "border-box", zIndex: "53", height: "20px", width: "108px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "10px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "390px", width: "119px"}}>
										<input type="text" name="text197" value={this.state.data.text197||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="262" style={{position: "absolute", boxSizing: "border-box", zIndex: "54", height: "20px", width: "119px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "442px", width: "256px"}}>
										<input type="text" name="text198" value={this.state.data.text198||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="263" style={{position: "absolute", boxSizing: "border-box", zIndex: "55", height: "20px", width: "256px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "39px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "79px", width: "602px"}}>
										<input type="text" name="text199" value={this.state.data.text199||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="264" style={{position: "absolute", boxSizing: "border-box", zIndex: "56", height: "20px", width: "602px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "36px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "239px", width: "462px"}}>
										<input type="text" name="text200" value={this.state.data.text200||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="265" style={{position: "absolute", boxSizing: "border-box", zIndex: "57", height: "20px", width: "462px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "10px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "70px", width: "632px"}}>
										<input type="text" name="text201" value={this.state.data.text201||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="266" style={{position: "absolute", boxSizing: "border-box", zIndex: "58", height: "20px", width: "632px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "294px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "70px", width: "632px"}}>
										<input type="text" name="text202" value={this.state.data.text202||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="267" style={{position: "absolute", boxSizing: "border-box", zIndex: "59", height: "20px", width: "632px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "46px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "625px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "61", height: "20px", width: "22px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check38" value={this.state.data.check38} id="1610302662101x20674" style={{backgroundColor: "white"}} tabIndex="269"/>
											<label htmlFor="1610302662101x20674"></label>
										</div>
									</div>
									<div className="bubble-r-box" style={{height: "20px", left: "671px", width: "22px"}}>
										<div className="bubble-element Checkbox clickable-element" style={{position: "absolute", boxSizing: "border-box", zIndex: "62", height: "20px", width: "22px", left: "0px", top: "0px", overflow: "visible", fontFamily: "Lato", fontSize: "14px", color: "rgb(37, 37, 37)", lineHeight: "1"}}>
											<input type="checkbox" onChange={this.onChange} name="check39" value={this.state.data.check39} id="1610302662102x20734" style={{backgroundColor: "white"}} tabIndex="270"/>
											<label htmlFor="1610302662102x20734"></label>
										</div>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "0px", height: "20px"}}>
									<div className="bubble-r-box" style={{height: "20px", left: "250px", width: "454px"}}>
										<input type="text" name="text203" value={this.state.data.text203||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="268" style={{position: "absolute", boxSizing: "border-box", zIndex: "60", height: "20px", width: "454px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div className="bubble-r-line" style={{marginTop: "17px", height: "1123px"}}>
						<div className="bubble-r-box" style={{height: "1123px", left: "0px", width: "794px"}}>
							<div className="bubble-element Group" id="other" style={{width: "794px", left: "0px", position: "absolute", boxSizing: "border-box", zIndex: "40", height: "1123px", top: "0px", backgroundColor: "rgba(255, 255, 255, 0)", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", borderRadius: "0px", backgroundImage: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1609947102113x375230293580750340%2FGenius%2520Kids%2520Infant%2520Package%25202020%2520%25281%2529-8.jpg?w=1024&amp;h=&amp;auto=compress&amp;dpr=1&amp;fit=max')"}}>
								<div className="bubble-r-line" style={{marginTop: "160px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "65px", width: "650px"}}>
										<input type="textarea" onChange={this.onChange} name="text248" value={this.state.data.text248||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="271" style={{position: "absolute", boxSizing: "border-box", zIndex: "2", height: "46px", width: "650px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "43px", height: "46px"}}>
									<div className="bubble-r-box" style={{height: "46px", left: "63px", width: "654px"}}>
										<input type="textarea" onChange={this.onChange} name="text249" value={this.state.data.text249||''} className="bubble-element MultiLineInput" data-gramm_editor="false" placeholder="REQUIRED" maxLength="" tabIndex="272" style={{position: "absolute", boxSizing: "border-box", zIndex: "3", height: "46px", width: "654px", left: "0px", top: "0px", border: "1px solid rgb(189, 189, 189)", backgroundColor: "rgb(255, 255, 255)", borderRadius: "3px", fontFamily: "Lato", fontSize: "14px", color: "rgb(61, 61, 61)", lineHeight: "1", padding: "4px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "8px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "23px", left: "279px", width: "202px"}}>
										<input type="text" name="text204" value={this.state.data.text204||''} onChange={this.onChange}   className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="273" style={{position: "absolute", boxSizing: "border-box", zIndex: "4", height: "22px", width: "202px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "22px", left: "577px", width: "108px"}}>
										<input type="text" name="text205" value={this.state.data.text205||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="274" style={{position: "absolute", boxSizing: "border-box", zIndex: "5", height: "22px", width: "108px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "211px", width: "268px"}}>
										<input type="text" name="text206" value={this.state.data.text206||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="275" style={{position: "absolute", boxSizing: "border-box", zIndex: "6", height: "22px", width: "268px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "577px", width: "108px"}}>
										<input type="text" name="text207" value={this.state.data.text207||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="276" style={{position: "absolute", boxSizing: "border-box", zIndex: "7", height: "22px", width: "108px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "34px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "300px", width: "140px"}}>
										<input type="text" name="text208" value={this.state.data.text208||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="277" style={{position: "absolute", boxSizing: "border-box", zIndex: "8", height: "22px", width: "140px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "632px", width: "66px"}}>
										<input type="text" name="text209" value={this.state.data.text209||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="278" style={{position: "absolute", boxSizing: "border-box", zIndex: "19", height: "22px", width: "66px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "184px", width: "111px"}}>
										<input type="text" name="text210" value={this.state.data.text210||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="279" style={{position: "absolute", boxSizing: "border-box", zIndex: "9", height: "22px", width: "111px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "158px", width: "418px"}}>
										<input type="text" name="text211" value={this.state.data.text211||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="280" style={{position: "absolute", boxSizing: "border-box", zIndex: "10", height: "22px", width: "418px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "24px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "300px", width: "137px"}}>
										<input type="text" name="text212" value={this.state.data.text212||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="281" style={{position: "absolute", boxSizing: "border-box", zIndex: "11", height: "22px", width: "137px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "24px", left: "637px", width: "66px"}}>
										<input type="text" name="text213" value={this.state.data.text213||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="282" style={{position: "absolute", boxSizing: "border-box", zIndex: "12", height: "22px", width: "66px", left: "0px", top: "2px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "188px", width: "96px"}}>
										<input type="text" name="text214" value={this.state.data.text214||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="283" style={{position: "absolute", boxSizing: "border-box", zIndex: "13", height: "22px", width: "96px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "6px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "159px", width: "447px"}}>
										<input type="text" name="text215" value={this.state.data.text215||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="284" style={{position: "absolute", boxSizing: "border-box", zIndex: "14", height: "22px", width: "447px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "5px", height: "23px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "318px", width: "114px"}}>
										<input type="text" name="text216" value={this.state.data.text216||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="285" style={{position: "absolute", boxSizing: "border-box", zIndex: "15", height: "22px", width: "114px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
									<div className="bubble-r-box" style={{height: "23px", left: "638px", width: "61px"}}>
										<input type="text" name="text217" value={this.state.data.text217||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="286" style={{position: "absolute", boxSizing: "border-box", zIndex: "16", height: "22px", width: "61px", left: "0px", top: "1px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "182px", width: "99px"}}>
										<input type="text" name="text218" value={this.state.data.text218||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="287" style={{position: "absolute", boxSizing: "border-box", zIndex: "17", height: "22px", width: "99px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
								<div className="bubble-r-line" style={{marginTop: "7px", height: "22px"}}>
									<div className="bubble-r-box" style={{height: "22px", left: "159px", width: "385px"}}>
										<input type="text" name="text219" value={this.state.data.text219||''} onChange={this.onChange}  className="bubble-element Input" placeholder="REQUIRED" maxLength="" tabIndex="288" style={{position: "absolute", boxSizing: "border-box", zIndex: "18", height: "22px", width: "385px", left: "0px", top: "0px", border: "1px solid rgba(171, 171, 171, 0.41)", backgroundColor: "rgb(252, 252, 252)", borderRadius: "5px", fontFamily: "Barlow", fontSize: "16px", fontWeight: "500", color: "rgb(107, 107, 107)", padding: "0px 10px"}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mySidenavi">
						<button type="submit" id="save">SAVE</button>
						{/* <button type="button" id="delete"  onClick={()=>$('#id01').css('display','block')}>DELETE</button> */}
						{/* <button type="button" id="print"  onClick={this.printPDF.bind(this)}><div id="myMm" style={{height:"1mm"}}></div>PRINT PDF</button> */}
					</div>
				</form>
			)};
		};
BLic9221.propTypes = {
	updateUserInfo: PropTypes.func.isRequired,
	updateChildInfo: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	userinfo: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth,
	userinfo: state.userinfo
});

export default connect(mapStateToProps, { updateUserInfo, updateChildInfo })(BLic9221);
// //acknowledgement of receipt of parent handbook and policies
// hb_date1:'',hb_name2:'',hb_sign2:'',hb_date2:'',hb_name3:'',hb_sign3:'',hb_sign3:'',
// //release and agreement(22)
// ra_date1:'',
// //parent consent for administration of medications and medication chart
// pc_ccname:'',pc_license:'',pc_date1:'',pc_mdname:'',pc_dosage:'',pc_begindate:'',pc_enddate:'',pc_tofday:'',pc_date2:'',
// pc_date3:'',pc_tg3:'',pc_ss3:'',
// pc_date4:'',pc_tg4:'',pc_ss4:'',
// pc_date5:'',pc_tg5:'',pc_ss5:'',
// pc_date6:'',pc_tg6:'',pc_ss6:'',
// pc_date7:'',pc_tg7:'',pc_ss7:'',
// pc_staff:'',pc_date8:'',
// //consent for emergency
// cmm_fname:'',
// cmm_aller:'',
// cmm_date:'',
// cmm_address:'',
// cmm_hphone:'',
// cmm_wphone:'',
// //child care center notification of parents' rights
// npr_name:'',
// npr_address:'',
// npr_telephone:'',
// npr_name1:'',
// npr_date1:'',
// //personal rights
// pr_address:'',
// pr_city:'',
// pr_zipcode:'',
// pr_arecode:'',
// pr_fname:'',
// pr_faddress:'',
// pr_title:'',
// pr_date:'',
// //child's preadmission health history
// cphh_sex:'',
// cphh_hwithchild1:'',
// cphh_hwithchild2:'',
// cphh_physician:'',
// cphh_exam:'',
// cphh_walk:'',
// cphh_wmonth:'',
// cphh_talk:'',
// cphh_tmonth:'',
// cphh_toilet:'',
// cphh_tmonth:'',
// cphh_pi_check1:'',
// cphh_pi_check2:'',
// cphh_pi_check3:'',
// cphh_pi_check4:'',
// cphh_pi_check5:'',
// cphh_pi_check6:'',
// cphh_pi_check7:'',
// cphh_pi_check8:'',
// cphh_pi_check9:'',
// cphh_pi_check10:'',
// cphh_pi_check11:'',
// cphh_pi_date1:'',
// cphh_pi_date2:'',
// cphh_pi_specify:'',
// cphh_pi_check12:'',
// cphh_pi_check13:'',
// cphh_pi_howmany:'',
// cphh_pi_listany:'',
// cphh_dr_getup:'',
// cphh_dr_bed:'',
// cphh_dr_sleepwell:'',
// cphh_dr_daysleep:'',
// cphh_dr_daysleepwhen:'',
// cphh_dr_daysleeplong:'',
// cphh_dr_breakfast1:'',
// cphh_dr_lunch1:'',
// cphh_dr_dinner1:'',
// cphh_dr_breakfast2:'',
// cphh_dr_lunch2:'',
// cphh_dr_dinner2:'',
// cphh_dr_dislike:'',
// cphh_dr_anyeating:'',
// cphh_dr_check1:'',
// cphh_dr_check2:'',
// cphh_dr_ifyes:'',
// cphh_dr_check3:'',
// cphh_dr_check4:'',
// cphh_dr_what:'',
// cphh_dr_word1:'',
// cphh_dr_word2:'',
// cphh_dr_parent:'',
// cphh_dr_check5:'',
// cphh_dr_check6:'',
// cphh_dr_ifyes1:'',
// cphh_dr_check7:'',
// cphh_dr_check8:'',
// cphh_dr_ifyes2:'',

// cphh_dr_check9:'',
// cphh_dr_check10:'',
// cphh_dr_ifyes3:'',

// cphh_dr_check11:'',
// cphh_dr_check12:'',
// cphh_dr_ifyes4:'',

// cphh_dr_parent1:'',
// cphh_dr_how:'',
// cphh_dr_has:'',
// cphh_dr_does:'',
// cphh_dr_what:'',
// cphh_dr_reason:'',
// cphh_dr_date:'',
// //identification and emergency information child care centers child care homes
// iaei_sex:'',
// iaei_telephone:'',
// iaei_number1:'',
// iaei_street1:'',
// iaei_city1:'',
// iaei_state1:'',
// iaei_zip1:'',
// iaei_birthdate1:'',
// iaei_btelephone1:'',

// iaei_number2:'',
// iaei_street2:'',
// iaei_city2:'',
// iaei_state2:'',
// iaei_zip2:'',
// iaei_birthdate2:'',
// iaei_htelephone2:'',
// iaei_btelephone2:'',

// iaei_number3:'',
// iaei_street3:'',
// iaei_city3:'',
// iaei_state3:'',
// iaei_zip3:'',
// iaei_birthdate3:'',
// iaei_htelephone3:'',
// iaei_btelephone3:'',
// iaei_htelephone4:'',

// iaei_ap_address1:'',
// iaei_ap_telephone1:'',
// iaei_ap_relationship1:'',
// iaei_ap_name2:'',
// iaei_ap_address2:'',
// iaei_ap_telephone2:'',
// iaei_ap_relationship2:'',
// iaei_ap_name3:'',
// iaei_ap_address3:'',
// iaei_ap_telephone3:'',
// iaei_ap_relationship3:'',
// iaei_ap_name4:'',
// iaei_ap_address4:'',
// iaei_ap_telephone4:'',
// iaei_ap_relationship4:'',

// iaei_po_physician:'',
// iaei_po_address1:'',
// iaei_po_medical1:'',
// iaei_po_telophone1:'',
// iaei_po_dentist:'',
// iaei_po_address2:'',
// iaei_po_medical2:'',
// iaei_po_telophone2:'',

// iaei_po_check1:'',
// iaei_po_check2:'',
// iaei_po_explain:'',

// iaei_np_relationship1:'',
// iaei_np_name2:'',
// iaei_np_relationship2:'',
// iaei_np_name3:'',
// iaei_np_relationship3:'',
// iaei_np_name4:'',
// iaei_np_relationship4:'',
// iaei_np_name5:'',
// iaei_np_relationship5:'',
// iaei_np_timechild:'',
// iaei_np_date:'',
// iaei_tb_date1:'',
// iaei_tb_date2:'',
// //sunscreen plicy and consent
// spc_dob:'',
// spc_sname:'',
// spc_date:'',
// spc_check1:'',
// spc_check2:'',
// spc_check3:'',
// spc_check4:'',
// spc_date1:'',
// spc_sign:'',
// spc_date2:'',
// //diaper rash cream permission
// drcp_dname:'',
// drcp_date:'',
// //infant needs and service plan
// in_tdate:'',
// in_check1:'',
// in_check2:'',
// in_if:'',
// in_what:'',
// in_how:'',
// in_does:'',
// in_check3:'',
// in_check4:'',
// in_ifyesfood:'',
// in_howoftem:'',
// in_anyspecial:'',
// in_doesyourchild:'',
// in_check5:'',
// in_check6:'',
// in_symphtoms:'',

// in_sn_how:'',
// in_sn_for:'',
// in_sn_how1:'',
// in_sn_how2:'',
// in_sn_anyspecial:'',
// in_sn_anyspecial1:'',

// in_tad_if:'',
// in_tad_if1:'',

// in_other_does:'',
// in_other_do:'',
// in_other_date1:'',
// in_other_teacher:'',
// in_other_date2:'',
// in_other_dateplan1:'',
// in_other_parent1:'',
// in_other_teacherinitial1:'',
// in_other_dateplan2:'',
// in_other_parent2:'',
// in_other_teacherinitial2:'',
// in_other_dateplan3:'',
// in_other_parent3:'',
// in_other_teacherinitial3:''