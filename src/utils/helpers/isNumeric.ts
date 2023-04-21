export const isNumeric = (entry: string) => {
  const notNumeric = ['', ' '];
  if (notNumeric.includes(entry)) return false;
  return !isNaN(Number(entry));
};
