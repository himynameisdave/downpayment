const groups = require('./groups.js');
const { sum, withTwoDecimals } = require('./utils/math.js');
const parseAndStrip = require('./utils/parse-and-strip.js');
const getReturnValue = require('./utils/format-return.js');

/**
 * Core calculation work done here.
 * 
 * @param {string | number} askingPrice - The asking price. Can include commas.
 * @returns {number} The minimum downpayment.
 */
const downpayment = (askingPrice) => {
  const value = parseAndStrip(askingPrice);
  if (isNaN(value)) {
    return getReturnValue(0);
  }
  //  Handle values 0 - 499,999
  if (groups.FIRST.isInRange(value)) {
    const total = groups.FIRST.calculate(value);
    return getReturnValue(total, { FIRST: total });
  }
  //  Handle values 500,000 - 999,999
  if (groups.NEXT.isInRange(value)) {
    const remainder = value - groups.MINIMUM.NEXT;
    const groupTotals = {
      FIRST: groups.FIRST.calculate(groups.MINIMUM.NEXT - 1),
      NEXT: groups.NEXT.calculate(remainder + 1),
    };
    const total = sum(groupTotals.FIRST, groupTotals.NEXT);
    return getReturnValue(total, groupTotals);
  }
  if (groups.LAST.isInRange(value)) {
    const total = groups.LAST.calculate(value);
    return getReturnValue(total, { LAST: total });
  }
  return 0;
};

module.exports = downpayment;
