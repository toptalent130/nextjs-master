const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
User.find().then((result)=>{
    // if(!result.length)
    // {
    //     new User(result)
    //     .save()
    //     .then(()=>{ console.log('User is created'); }).catch(err => console.log(err));
    // } else {
    //     console.log('User is already existed');
    // }
})
