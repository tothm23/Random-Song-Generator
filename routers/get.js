const express = require("express");
const router = express.Router();

const data = require("../public/data");
const dataPerformer = require("../my_modules/performerIndex");

router.get("/", (req, res) => {
  res.render("pages/index", { title: "Songgenerator - Main", performers: data });
});

router.get("/choosed", (req, res) => {
  let performerQuery = req.query["performer"];
  res.render("pages/choosed", { title: "Songgenerator - Choosed performer", printPerformer: dataPerformer(performerQuery)[0], displayAvatas: dataPerformer(performerQuery)[1], song: dataPerformer(performerQuery)[2], url: dataPerformer(performerQuery)[3] });
});

module.exports = router;
