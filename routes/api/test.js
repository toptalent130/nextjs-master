const express = require('express');
const router = express.Router();

//get student
router.get('/test', (req, res)=>{
    console.log('this is test for postman');
})
module.exports = router;