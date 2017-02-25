/*
Filename: models/books.js
Author: Jishnu Sundar
Student ID: 300819912
Web App: COMP308-W2017-MidTerm-300819912
*/
let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
