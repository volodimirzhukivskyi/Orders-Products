import { MONTHS } from "./constans";

export const convertDateToString = (date) => {
  return `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}
  ${date.getHours()}:${date.getMinutes()}`;
};
