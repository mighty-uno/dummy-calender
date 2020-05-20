import React from "react";

const EventCard = (props) => {
  const elements = {
    blocked: (
      <div className="rounded-lg text-gray-500 bg-gray-100 border-solid border border-gray-400 h-32 p-2">
        <div className="text-xs">{props.value.time}</div>
        <div className="">blocked</div>
      </div>
    ),
    open: (
      <div
        className="rounded-lg text-blue-500  bg-blue-100 border-solid border bg-blue border-blue-400 h-32 p-2"
        onClick={() => {
          props.onEventSelect(props.value);
        }}
      >
        <div className="text-xs">{props.value.time}</div>
        <div>open</div>
      </div>
    ),
    booked: (
      <div
        className="rounded-lg text-white bg-green-400 border-solid border border-green-400 h-32 p-2"
        onClick={() => {
          props.onEventSelect(props.value);
        }}
      >
        <div className="text-xs">{props.value.time}</div>
        <div className="capitalize">{props.value.bookedTo}</div>
      </div>
    ),
  };
  return elements[props.value.isBooking] || elements.open;
};

export default EventCard;
