export const isNumeric = (char: string) => {
  const notNumeric = ['', ' '];
  if (notNumeric.includes(char)) return false;
  return !isNaN(Number(char));
};
