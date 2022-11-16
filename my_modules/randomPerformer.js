const fs = require("fs");
const randomNumber = require("./randomNumber");

/**
 * Return a random performer
 * @returns
 */
function printRandomPerformer() {
  // Using Synchronous method
  const rawData = fs.readFileSync("./public/data.json");
  const data = JSON.parse(rawData);

  let performer = [];
  const index = randomNumber(data.length);

  performer.push(data[index].full_name);
  performer.push(data[index].short_name);
  performer.push(data[index].song);

  return performer;
}

module.exports = printRandomPerformer;
