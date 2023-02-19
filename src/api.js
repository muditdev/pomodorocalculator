export const getWorkingHrs = async ({ deep, shallow }) => {
  // 1 deep hour  = 5 min break = 9%
  // 1 shallow hour = 10 min break = 16%
  const totalDeepHrs = deep - deepBreak(deep);
  const totalShallowHrs = shallow - shallowBreak(shallow);
  return {
    deep: totalDeepHrs,
    shallow: totalShallowHrs,
    total: totalDeepHrs + totalShallowHrs
  };
};

const deepBreak = (hrs) => {
  return (hrs * 9) / 100;
};

const shallowBreak = (hrs) => {
  return (hrs * 16) / 100;
};
