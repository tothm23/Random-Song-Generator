const express = require("express");
//const expressLayouts = require("express-ejs-layouts");
const data = require("./public/data");
const printrandomPerformer = require("./my_modules/randomPerformer");

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
  res.render("pages/index", { title: "Songgenerator", performers: data });
});

app.get("/choosed", (req, res) => {
  res.render("pages/choosed", { title: "Songgenerator", printPerformer: printrandomPerformer[0], displayAvatas: printrandomPerformer[1], song: printrandomPerformer[2] });
});

app.listen(PORT, () => {
  console.info(`songgenerator run on ${PORT}`);
});
