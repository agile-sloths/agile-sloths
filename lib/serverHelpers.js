isUserLoggedIn = function(req) {
  // req.session.user will be a session key, the double bang operator turns that value into a boolean (i.e exists or not)
  return req.session ? !!req.session.user : false;
}

exports.encodeRequest = (req) => {
  return req.split(' ').join('%20');
}

exports.separateTimes = (string) => {
  return string.split('-')
}

exports.checkIfLoggedIn = function(req, res, next) {
  // if user is not logged in, redirect to login page
  if(!isUserLoggedIn(req)) {
    res.redirect('/login');
  } else {
    // otherwise sends back to original server call to finish (i.e. send to expected page)
    next()
  }
}