import React from "react";

const EventCard = (props) => {
  const elements = {
    blocked: (
      <div className="rounded-lg bg-gray-100 border-solid border border-gray-400 h-32 p-2">
        <div>{props.value.time}</div>
        <div className="">blocked</div>
      </div>
    ),
    open: (
      <div
        className="rounded-lg bg-blue-100 border-solid border bg-blue border-blue-400 h-32 p-2"
        onClick={() => {
          props.onEventSelect(props.value);
        }}
      >
        <div>{props.value.time}</div>
        <div>open</div>
      </div>
    ),
    booked: (
      <div
        className="rounded-lg  bg-green-100 border-solid border border-green-400 h-32 p-2"
        onClick={() => {
          props.onEventSelect(props.value);
        }}
      >
        <div>{props.value.time}</div>
        <div className="capitalize">{props.value.bookedTo}</div>
      </div>
    ),
  };
  return elements[props.value.isBooking] || elements.open;
};

export default EventCard;
