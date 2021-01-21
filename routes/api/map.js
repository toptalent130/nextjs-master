const express = require('express');
const router = express.Router();
const SideMap = require('../../models/sidemap');

//get student
router.get('/sidemap', (req, res)=>{
        SideMap.find()
            .then(list=> res.json(list))
            .catch(err => console.log(err));
});
module.exports = router;