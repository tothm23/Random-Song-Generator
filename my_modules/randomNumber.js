/**
 * return a random number
 * @param {*} max
 * @returns
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

module.exports = getRandomNumber;
