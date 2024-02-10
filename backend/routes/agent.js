const router = require("express").Router();
let Agent = require("../models/agent");

router.route("/").get((req, res) => {
  Agent.find()
    .then((agents) => res.json(agents))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Agent.findOne({ id: req.params.id })
    .then((agent) => res.json(agent))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;
