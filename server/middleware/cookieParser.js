const parseCookies = (req, res, next) => {
  cookie = req.cookies.sessionId;
  if (!cookie) {

  }
  // Load cookies from req
  // If there is a session cookie already
  // Invoke auth with the cookie value
  // Else load login view

};

module.exports = parseCookies;