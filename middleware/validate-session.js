var jwt = require('jsonwebtoken');
var User = require('../models/user');
var constants = require('../config/constants');

module.exports = (req, res, next) => {
  var sessionToken = req.headers.authorization;

  if(!req.body.user && req.headers.authorization){
    jwt.verify(sessionToken, constants.JWT_SECRET, (error, decodedId) => {
        if(decodedId){
          User.findOne({ _id:decodedId}).then((user) => {
            req['user'] = user;
            next();
          }, (err) => {
            res.send(401, 'not authorized');
          });
        } else {
          res.send(401, 'not authorized');
        }
      });
    } else {
    netx();
  }
};
