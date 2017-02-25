/*
Filename: routes/index.js
Author: Jishnu Sundar
Student ID: 300819912
Web App: COMP308-W2017-MidTerm-300819912
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
