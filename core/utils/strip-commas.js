/**
 * Takes a string, strips out commas
 *
 * @param {string} val - Value who's commas you want to strip
 */
function stripCommas(val = '') {
  return val.replace(/,/g, '');
}

module.exports = stripCommas;
