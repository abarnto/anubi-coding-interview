import { useMemo } from "react";
import classes from "../styles/TransactionTable.module.css";

const DateTimeLabel = ({ children }: { children: string | number }) => {
  const [date, time]: string[] = useMemo(() => {
    const inputDate = new Date(children); // unifying input into Date object
    if (inputDate instanceof Date && !isNaN(inputDate.valueOf())) {
      let inputDateIsoString = inputDate.toISOString();
      inputDateIsoString = inputDateIsoString.slice(0, -8); // removing useless milliseconds part
      const [d, t] = inputDateIsoString.split("T");
      return [d.split("-").reverse().join("/"), t];
    } else {
      return ["DD/MM/YYYY", "HH:mm"];
    }
  }, [children]);

  return (
    <div className={classes.createdOn}>
      <div>{date}</div>
      <div className="mt-4">{time}</div>
    </div>
  );
};

export default DateTimeLabel;
