const fs = require("fs");
const randomNumber = require("./randomNumber");

// Using Synchronous method
const rawData = fs.readFileSync("./public/data.json");
const data = JSON.parse(rawData);

let performer = []
performer.push(data[randomNumber(data.length)].full_name);
performer.push(data[randomNumber(data.length)].short_name);
performer.push(data[randomNumber(data.length)].song);

function printRandomPerformer() {
  return performer;
}

module.exports = printRandomPerformer();