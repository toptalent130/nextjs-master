const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
User.find().then((result)=>{
    const SuperAdmin = {
        name: "superadmin",
        email: "superadmin@gmail.com",
        password: "$2a$10$MGhpfo5vtVruo6sm8H60suEyJgm8bB52tYXSs6yknozQ74MYNnw3q",
        role: 3
    }
    if(!result.length)
    {
        new User(SuperAdmin)
        .save()
        .then(()=>{ console.log('Super admin is created'); }).catch(err => console.log(err));
    } else {
        console.log('Super admin is already existed');
    }
})
