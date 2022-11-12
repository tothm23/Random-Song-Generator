const fs = require("fs");
const randomNumber = require("./randomNumber");
let performer = "";

fs.readFile("./public/data.json", "utf8", (err, text) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  const data = JSON.parse(text);
  performer = data[randomNumber(data.length)].full_name;
});

function printRandomPerformer() {
  console.log(performer);
  return performer;
}

module.exports = printRandomPerformer();
