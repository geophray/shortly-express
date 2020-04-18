const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.checkSession = (req, res, next) => {

  cookie = req.cookies.sessionId;
// We have the session hash from the cookie parser
// Check sessions table to see if hash exists in db
  // If yes,
  // Load index view with user data
  // Else
  // Send them to login page
};