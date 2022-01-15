const renderDashboard = async (req, res) => {
  res.render("dashboard");
};

const renderLogout = async (req, res) => {
  res.render("logout");
};

module.exports = {
  renderLogout,
  renderDashboard,
};
