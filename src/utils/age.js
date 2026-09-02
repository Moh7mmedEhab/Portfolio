// Helper utility to calculate exact dynamic age and months from birthdate (Sept 30, 2008)
export const getDynamicAge = () => {
  const birthDate = new Date(2008, 8, 30); // September 30, 2008 (month is 0-indexed: 8 = September)
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  const dayDiff = now.getDate() - birthDate.getDate();

  if (dayDiff < 0) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    formatted: `${years} Years, ${months} Months`,
    short: `${years} Years Old`
  };
};
