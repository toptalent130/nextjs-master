const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SideMap = require('./sidemap');

const Lttymap=[
    {prereview: 'Prereview and Sign parent'},
    {lic9221: 'parent consent for administration of medications'},
    {lic627: 'consent for emergency medical treatment'},
    {lic995A: 'child care center notification'},
    {lic613A: 'personal rights'},
    {lic702: 'child preadmission health history'},
    {lic700: 'indentification and emergency info child care centers'},
    {lic995E: 'important information for parents'},
    {sunscreen: 'sunscreen policy &amp; consent'},
    {diaper_rash: 'diaper rash cream permission'},
    {infant_need: 'infant need and services plan'},
    {other: 'other question about child'}
];
const Gttymap=[
    {prereview: 'Prereview and Sign parent'},
    {lic9221: 'parent consent for administration of medications'},
    {lic627: 'consent for emergency medical treatment'},
    {lic995A: 'child care center notification'},
    {lic613A: 'personal rights'},
    {lic702: 'child preadmission health history'},
    {lic700: 'indentification and emergency info child care centers'},
    {lic995E: 'important information for parents'},
    {sunscreen: 'sunscreen policy &amp; consent'},
    {diaper_rash: 'diaper rash cream permission'},
    {infant_need: 'infant need and services plan'},
    {other: 'other question about child'}
]
SideMap.find().then((result)=>{
    if(!result.length)
    {
        new SideMap({ltty:Lttymap,gtty:Gttymap})
        .save()
        .then(()=>{ console.log('new side map is inserted'); }).catch(err => console.log(err));
    } else {
        console.log('new side map is already inserted');
    }
})
