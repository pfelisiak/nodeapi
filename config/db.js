var db = require('mongoose');

db.connect('mongodb://test:qwe123@ds139919.mlab.com:39919/workouts');

module.exports = db;
