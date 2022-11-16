/**
 * return a random number based of the max
 * @param {*} max
 * @returns
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

module.exports = getRandomNumber;
