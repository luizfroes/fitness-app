const renderLogin = (req, res) => {
    res.render("login");
};

const renderHome = (req, res) => {
    //   const { loggedIn } = req.session;
    res.render("home");
};

const renderSignUp = (req, res) => {
    res.render("signup");
};

module.exports = {
    renderHome,
    renderLogin,
    renderSignUp,
};