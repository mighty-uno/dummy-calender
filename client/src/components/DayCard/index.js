import React from "react";
import dayjs from "dayjs";
const DayCard = (props) => {
  return (
    <div className>
      <div className="font-bold">{props.value.day}</div>

      <div className="text-4xl font-bold">
        {dayjs(props.value.date, "YYYY-MM-DD").format("DD")}
      </div>
    </div>
  );
};

export default DayCard;
