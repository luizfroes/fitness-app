const { Router } = require("express");

const api = require("./api");
const view = require("./view");

const router = Router();

router.use("/api", api);
router.use("/", view);

module.exports = router;
