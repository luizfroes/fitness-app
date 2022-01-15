const { Router } = require("express");

const {
  renderLogout,
  renderDashboard,
} = require("../../controllers/view/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/logout", renderLogout);

module.exports = router;
