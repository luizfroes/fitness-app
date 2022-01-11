const auth = (req, res, next) => {
  if (req.session.loggedIn) {
    console.log("In session");

    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = auth;
