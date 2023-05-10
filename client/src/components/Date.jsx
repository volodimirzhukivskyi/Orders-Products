import { useEffect, useState } from "react";
import { convertDateToString } from "../helpers/convertDateToString";

export const DateTimer = () => {
  const [dateString, setDateString] = useState(convertDateToString(new Date()));

  useEffect(() => {
    const timer = setTimeout(() => {
      setDateString(convertDateToString(new Date()));
    }, 1000);
    return () => clearTimeout(timer);
  }, [dateString]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Зараз {dateString}.</h2>
    </div>
  );
};
export default DateTimer;
