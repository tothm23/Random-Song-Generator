const fs = require("fs");

/**
 * Return a random performer based of the index of the inputName
 * @param {*} inputName
 * @returns
 */
function data(inputName) {
  const rawData = fs.readFileSync("./public/data.json");
  const data = JSON.parse(rawData);

  const short_names = [];
  for (let i = 0; i < data.length; i++) {
    short_names.push(data[i].short_name);
  }

  // Get the index of the inputNames
  let idx = short_names.indexOf(inputName);

  let performer = [];
  performer.push(data[idx].full_name);
  performer.push(data[idx].short_name);
  performer.push(data[idx].song);

  return performer;
}

module.exports = data;
