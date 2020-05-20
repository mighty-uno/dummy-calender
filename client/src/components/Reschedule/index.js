import React, { useState } from "react";
import { Button } from "..";
const ReSchedule = (props) => {
  const {
    value: { bookedTo, date, day, time },
    onClose,
  } = props;
  return (
    <div>
      <div className="text-4xl">{bookedTo}</div>
      <div className="text-base capitalize">{`${day}, ${date} ${time}`}</div>

      <div className="grid grid-cols-2 w-full space-x-4 my-4">
        <Button color="yellow">Re-Schedule</Button>
        <Button onClick={onClose} color="red">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ReSchedule;
