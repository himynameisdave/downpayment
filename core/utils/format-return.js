const defaultReturnGroups = {
  FIRST: 0,
  NEXT: 0,
  LAST: 0,
};

const getReturnGroups = (groups = defaultReturnGroups) => ({
  ...defaultReturnGroups,
  ...groups,
});

const getReturnValue = (total, groups) => ({
  total,
  ...getReturnGroups(groups),
});

module.exports = getReturnValue;
