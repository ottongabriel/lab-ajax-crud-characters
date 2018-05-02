const express      = require('express');
const router       = express.Router();
const Character    = require('../models/character');
const mongoose     = require('mongoose');
const axios        = require('axios')



mongoose.connect('mongodb://localhost/ajax-crud-characters', {useMongoClient: true})


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/characters', (req, res, next) => {
  
  Character.find({})
  .then(characters => {
    res.json(characters)
  
  })
  .catch(err => {
    console.log('err: ', err);
  })
  

});





module.exports = router;
