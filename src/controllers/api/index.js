const renderLogin = (req, res) => {
  res.send("Login");
  //   res.render("login");
};

const renderHome = (req, res) => {
  res.send("Home");
  //   const { loggedIn } = req.session;
  //   res.render("home", { loggedIn });
};

const renderSignUp = (req, res) => {
  res.send("Signup");
  //   res.render("signup");
};

module.exports = {
  renderHome,
  renderLogin,
  renderSignUp,
};
