const express = require('express');
const { lastname } = require('../../models/Children');
// const { CLEAR_ERRORS } = require('../../client/src/actions/types');
const router = express.Router();
const UserInfo = require('../../models/UserInfo');
const User = require('../../models/User');

router.post('/userinfo/register', (req, res) => {
  UserInfo.findOne({ userid: req.body.userid }).then(userinfo => {
    if (userinfo) {
      // errors.userinfo = 'UserInfo already exists';
      return res.json(userinfo);
    } else {
      const newUser = new UserInfo({
        userid: req.body.userid,
      });
      new UserInfo(newUser).save().then(profile => res.json(profile))
          .catch(err => console.log(err));
    }
  });
});
router.get('/allchildren', async(req, res) => {
  let allchildren = [];
  await UserInfo.find().then(userinfos =>{
    userinfos.forEach((userinfo)=>{
      const modifiername = userinfo.guadian_firstname+' '+userinfo.guadian_lastname;
      const modifieruserid = userinfo.userid;
      if(userinfo.children){
        userinfo.children.forEach((each)=>{
          let child = {
            modifier: modifiername,
            userid: modifieruserid,
            business_phone_number: userinfo.business_phone_number,
            city: userinfo.city,
            guadian_firstname: userinfo.guadian_firstname,
            guadian_lastname: userinfo.guadian_lastname,
            home_phone_number: userinfo.home_phone_number,
            house_number: userinfo.house_number,
            state: userinfo.state,
            street: userinfo.state,
            zip: userinfo.zip,
            childinfo: each
          };
          allchildren.push(child);
        });
      };
    });
  });
  await User.find().then((users)=>{
    const admins = users.filter((each)=>{
      if(each.role >= 2)
        return true
    });
    res.json({allchildren, users: admins});
  }).catch(err => console.log(err));
});
router.post('/userinfo/getone', (req, res) => {
  UserInfo.findOne({ userid: req.body.userid }).then(userinfo => {
      return res.json(userinfo);
    }).catch(err => console.log(err));
});
router.post('/userinfo/update', (req, res) => {
    if(!req.body.children){
      UserInfo.findOneAndUpdate({userid:req.body.userid}, req.body, {upsert: true}, function(err, result) {
        UserInfo.findOne({ userid: req.body.userid }).then(data => {
          return res.json(data);
        });
      });
    } else if(!req.body.children[0].firstname){
      req.body.children.forEach(element => {
        UserInfo.findOneAndUpdate({userid:req.body.userid}, {chnum:req.body.chnum, $push: {"children":{"firstname":element.firstname,"middlename":element.middlename,"lastname":element.lastname,"age":element.age,"birthday":element.birthday, "sex":element.sex, "city":element.city, "street":element.street, "zip":element.zip, "house_number":element.house_number, "state": element.state}}}, {upsert: true}, function(err, result) {
          UserInfo.findOne({ userid: req.body.userid }).then(data => {
            // console.log(data)
            return res.json(data);
          });
        });
      });
    } else {
      // const user = UserInfo.findOne({});
      req.body.children.forEach(element=>{
        UserInfo.updateOne({'children._id': element._id}, {'$set': {'children.$':element}}, {safe: true, upsert: true}, function(err,model) {
          UserInfo.findOne({userid: req.body.userid }).then(data => {
            return res.json(data);
          });
        });
      });
    };
});
router.post('/userinfo/updatechilddata', (req, res) => {
    const user = UserInfo.findOne({_id: req.body.userid});
    user.updateOne({'children._id': req.body.basicinfo._id},{'$set': {'children.$.completion': req.body.completion,'children.$.data': {...req.body.basicinfo.data,...req.body.data}}}, {safe: true, upsert: true}, function(err,model) {
      UserInfo.findOne({ _id: req.body.userid }).then(data => {
        return res.json(data);
      });
    });
});
router.post('/userinfo/deletechild', (req, res) => {
  // UserInfo.findOne({userid:req.body.userid}).then((userinfo)=>{
  //   if(userinfo.children.length > 1){
  //     UserInfo.findOneAndUpdate({userid:req.body.userid}, {$pull: {"children":{_id:req.body.childid}}}, {upsert: true}, function(err, result) {
  //       UserInfo.findOne({ userid: req.body.userid }).then(data => {
  //         return res.json(data);
  //       });
  //     });
  //   } else {
  //     UserInfo.findOneAndDelete({userid:req.body.userid}).then(()=>{
  //       return res.json({});
  //     });
  //   }
  // });
  UserInfo.findOneAndUpdate({userid:req.body.userid}, {$pull: {"children":{_id:req.body.childid}}}, {upsert: true}, function(err, result) {
    getAllChildrenAndAdmins(res)
  });
});
getAllChildrenAndAdmins = async(res)=>{
  let allchildren = [];
  await UserInfo.find().then(userinfos =>{
      userinfos.forEach((userinfo)=>{
      const modifiername = userinfo.guadian_firstname+' '+userinfo.guadian_lastname;
      const modifieruserid = userinfo.userid;
      if(userinfo.children){
          userinfo.children.forEach((each)=>{
          let child = {
              modifier: modifiername,
              userid: modifieruserid,
              business_phone_number: userinfo.business_phone_number,
              city: userinfo.city,
              guadian_firstname: userinfo.guadian_firstname,
              guadian_lastname: userinfo.guadian_lastname,
              home_phone_number: userinfo.home_phone_number,
              house_number: userinfo.house_number,
              state: userinfo.state,
              street: userinfo.state,
              zip: userinfo.zip,
              childinfo: each
          };
          allchildren.push(child);
          });
      };
      });
  });
  await User.find().then((users)=>{
      const admins = users.filter((each)=>{
      if(each.role >= 2)
          return true
      });
      res.json({allchildren, users: admins});
  }).catch(err => console.log(err));
}
module.exports = router;
