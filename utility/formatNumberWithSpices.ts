export const formatNumberWithSpices = (number: number) => {
  return new Intl.NumberFormat("ru-RU").format(number);
};
