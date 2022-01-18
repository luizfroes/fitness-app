const { Router } = require("express");

const auth = require("./auth");
const api = require("./api");
const view = require("./view");

const router = Router();

router.use("/auth", auth);
router.use("/api", api);
router.use("/", view);

module.exports = router;