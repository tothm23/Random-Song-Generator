const express = require("express");
//const expressLayouts = require("express-ejs-layouts");
const data = require("./public/data");
//const printPerformer = require("./my_modules/randomPerformer");

const randomNumber = require("./my_modules/randomNumber");
const fs = require("fs");
let printPerformer = "";

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

fs.readFile("./public/data.json", "utf8", (err, text) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  const data = JSON.parse(text);
  const ridx = randomNumber(data.length);
  printPerformer = data[ridx].full_name;
  displayAvatas = data[ridx].short_name;
});

app.get("/random", (req, res) => {
  res.render("pages/random", { title: "Songgenerator", printPerformer: printPerformer, displayAvatas: displayAvatas });
});

app.listen(PORT, () => {
  console.info(`songgenerator run on ${PORT}`);
});
