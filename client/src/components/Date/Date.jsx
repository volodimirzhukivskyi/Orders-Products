import { useEffect, useState } from "react";
import { convertFunction } from "../../helpers/convertFunction";
import styles from "./Date.module.scss"
import{ReactComponent as Clock} from "../../assets/header/clock-svgrepo-com.svg";

export const DateTimer = () => {
  const [dateString, setDateString] = useState(convertFunction());

  useEffect(() => {
    const timer = setTimeout(() => {
      setDateString(convertFunction());
    }, 1000);
    return () => clearTimeout(timer);
  }, [dateString]);

  return (<>
    {dateString&&<div className={styles.date}>
      <h3 className={styles.date__weekday}>{dateString.weekday}</h3>
      <p className={styles.date__toString}>{dateString.date}<span className={styles.date__time}><Clock className={styles.date__clockSvg}/>{dateString.time}</span></p>
    </div>

    }
  </>

  );
};
export default DateTimer;
