/**
 * Sums two numbers.
 * 
 * @param {number} a - Number to add.
 * @param {number} b - Number to add.
 */
function sum(a, b) {
  return a + b;
}

/**
 * Call .toFixed(2) on a number.
 * 
 * @param {number} num - Given number.
 */
function withTwoDecimals(num = 0) {
  return Number(num.toFixed(2)); // Wrapped in Number because .toFixed returns a string
}

/**
 * Used for calculating percentage of a value.
 * 
 * @param {number} percent - Percentage you want to calculate.
 * @returns {{ percentOf(value: number): number }} Object with a percentOf method which accepts value to be calculated.
 * @example
 * calculate(20).percentOf(200) // > 40
 */
function calculate(percent) {
  return {
    percentOf(value) {
      return withTwoDecimals(value * (percent / 100));
    }
  };
}

module.exports = {
  sum,
  withTwoDecimals,
  calculate,
};
