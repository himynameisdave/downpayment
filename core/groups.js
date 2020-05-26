const { calculate } = require('./utils/math.js');

const MINIMUM = {
  FIRST: 0,
  NEXT: 500000,
  LAST: 1000000,
};


module.exports = {
  MINIMUM: MINIMUM,
  FIRST: {
    calculate: (value) => calculate(5).percentOf(value),
    isInRange: (value) => value >= MINIMUM.FIRST && value < MINIMUM.NEXT,
  },
  NEXT: {
    calculate: (value) => calculate(10).percentOf(value),
    isInRange: (value) => value >= MINIMUM.NEXT && value < MINIMUM.LAST,
  },
  LAST: {
    calculate: (value) => calculate(20).percentOf(value),
    isInRange: (value) => value >= MINIMUM.LAST,
  },
};
