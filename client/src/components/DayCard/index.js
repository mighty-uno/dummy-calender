import React from "react";
import dayjs from "dayjs";
const DayCard = (props) => {
  return (
    <div className>
      <div>{props.value.day}</div>
      <div>{dayjs(props.value.date, "YYYY-MM-DD").format("DD")}</div>
    </div>
  );
};

export default DayCard;
