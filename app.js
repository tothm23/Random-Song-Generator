const express = require("express");
//const expressLayouts = require("express-ejs-layouts");

//const printrandomPerformer = require("./my_modules/randomPerformer");
const getRouters = require("./routers/get");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/logos", express.static(__dirname + "/public/logos"));

//app.use(expressLayouts);
app.set("view engine", "ejs");
//app.set("layout", "./index");

app.use("/", getRouters);

app.listen(PORT, () => {
  console.info(`songgenerator run on ${PORT}`);
});