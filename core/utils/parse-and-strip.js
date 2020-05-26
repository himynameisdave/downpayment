const stripCommas = require('./strip-commas.js');

/**
 * Parses a given number into a string, then strips commas
 * 
 * @param {number} val - Value to parseAndStrip
 */
function parseAndStrip(val) {
  return parseFloat(
    stripCommas(val)
  );
}

module.exports = parseAndStrip;
