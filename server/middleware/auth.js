const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // If shortlyId cookie exists
  // // Invoke Sessions.get on cookie hash = req.cookies.shortlyId
  // Else
  // // Invoke Sessions.create

  Promise.resolve(req.cookies.shortlyid)
    .then(cookieVal => {
      if (!cookieVal) {
        throw cookieVal;
      }
      return models.Sessions.get({'hash': cookieVal});
    })
    .then(session => {
      if (!session) {
        console.log('!session====================================>', session);
        throw session;
      }
      return session;
    })
    .error(error => {
      console.log(error);
      next(error);
    })
    .catch(session => {
      return models.Sessions.create();
    })
    .then(newSession => {
      // console.log(res);
      return models.Sessions.get({'id': newSession.insertId});
    })
    .then(session => {
      console.log(session);
      req.session = session;
      res.cookie('shortlyid', session.hash);
      next();
    })
    .catch(error => console.log(error));

  //req.session = models.Sessions.create();




};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

// module.exports.checkSession = (req, res, next) => {

//   cookie = req.cookies.sessionId;
// // We have the session hash from the cookie parser
// // Check sessions table to see if hash exists in db
//   // If yes,
//   // Load index view with user data
//   // Else
//   // Send them to login page
// };