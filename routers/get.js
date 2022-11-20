const express = require("express");
const router = express.Router();

const data = require("../public/data");
const dataPerformer = require("../my_modules/performerIndex");

/**
 * main page
 */
router.get("/", (req, res) => {
  res.render("pages/index", { title: "Songgenerator - Main", performers: data });
});

/**
 * If no results, redirect to main page
 */
router.get("/choosed", (req, res) => {
  let performerQuery = req.query["performer"];
  try {
    res.render("pages/choosed", { title: "Songgenerator - Choosed performer", printPerformer: dataPerformer(performerQuery)[0], displayAvatas: dataPerformer(performerQuery)[1], song: dataPerformer(performerQuery)[2], url: dataPerformer(performerQuery)[3] });
  } catch (error) {
    res.redirect("/");
  }
});

/**
 * If refer to wrong page, redirect to main page
 */
router.get("/*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
