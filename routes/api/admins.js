const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const UserInfo = require('../../models/UserInfo');
const User = require('../../models/User');
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
          errors.email = 'Email already exists';
          return res.status(400).json(errors);
        } else {
          const avatar = gravatar.url(req.body.email, {
            s: '200', // Size
            r: 'pg', // Rating
            d: 'mm' // Default
          });
          let role;
          if(req.body.role === "admin"){
            role = 2;
          } else if(req.body.role === "superadmin"){
            role = 3;
          } else {
            role = 1;
          }
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            avatar,
            password: req.body.password,
            role: role
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              new User(newUser).save().then(getAllChildrenAndAdmins(res))
                .catch(err => console.log(err));
            });
          });
        }
      });
});
router.post('/update', (req, res) => {
    let role = 2;
    if(req.body.role === true){
        role = 3;
    }
    User.findOneAndUpdate({email:req.body.email}, {role: role}, {upsert: true}, function(err, result) {
        getAllChildrenAndAdmins(res);
    });
});
router.post('/delete', (req, res) => {
    User.findOneAndDelete({email:req.body.email}).then(()=>{
        getAllChildrenAndAdmins(res);
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
