const express = require("express");
//const expressLayouts = require("express-ejs-layouts");
const data = require("./public/data");
//const printrandomPerformer = require("./my_modules/randomPerformer");
const dataPerformer = require("./my_modules/performerIndex");

const app = express();
const PORT = 8080;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/logos", express.static(__dirname + "/public/logos"));

//app.use(expressLayouts);
app.set("view engine", "ejs");
//app.set("layout", "./index");

app.get("/", (req, res) => {
  res.render("pages/index", { title: "Songgenerator - Main", performers: data });
  //console.log(req.query["performer"]);
});

app.get("/choosed", (req, res) => {
  let performerQuery = req.query["performer"];
  res.render("pages/choosed", { title: "Songgenerator - Choosed performer", printPerformer: dataPerformer(performerQuery)[0], displayAvatas: dataPerformer(performerQuery)[1], song: dataPerformer(performerQuery)[2] });
});

app.listen(PORT, () => {
  console.info(`songgenerator run on ${PORT}`);
});
