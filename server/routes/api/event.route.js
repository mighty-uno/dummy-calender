const { Router } = require("express");
const { Event } = require("../../controllers");

const router = new Router();

router
  .route("/")
  .post(async (req, res) => {
    try {
      const result = await Event.add(req.body);
      res.status(200).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  })
  .get(async (req, res) => {
    try {
      const result = await Event.get();
      res.status(200).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });

module.exports = router;
