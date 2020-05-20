const router = require("express").Router();
const events = require("./event.route");
router.use("/events", events);

module.exports = router;
