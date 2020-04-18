const parseCookies = (req, res, next) => {
  cookieArray = req.headers.cookie ? req.headers.cookie.split('; ') : [];
  cookies = {};
  // console.log('cookie monster =======================>', cookieArray);
  // Create an empty object cookies
  // split by  ; into an array of cookies
  // // Iterate over that array,
  // // // Splitting each string by = in to a tuple
  // // // Add each tuple to the cookie object as prop:val

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].split('=');
    cookies[cookie[0]] = cookie[1];
  }

  req.cookies = cookies;

  next();
};

module.exports = parseCookies;