import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
const type = "Element";
const EventCard = (props) => {
  // const ref = useRef(null);
  // const [, drop] = useDrop({
  //   // Accept will make sure only these element type can be droppable on this element
  //   accept: type,
  //   hover(item) {},
  // });

  // const [{ isDragging }, drag] = useDrag({
  //   // item denotes the element type, unique identifier (id) and the index (position)
  //   item: { ...props.value, type, index: props.key },
  //   // collect method is like an event listener, it monitors whether the element is dragged and expose that information
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  const elements = {
    blocked: (
      <div
        // ref={ref}
        className="rounded-lg text-gray-500 bg-gray-100 border-solid border border-gray-400 h-32 p-2"
      >
        <div className="text-xs lowercase">{props.value.time}</div>
        <div className="capitalize">blocked</div>
      </div>
    ),
    open: (
      <div
        // ref={ref}
        className="rounded-lg text-blue-500  bg-blue-100 border-solid border bg-blue border-blue-400 h-32 p-2"
        onClick={() => {
          props.onEventSelect(props.value);
        }}
      >
        <div className="text-xs lowercase">{props.value.time}</div>
        <div className="capitalize">open</div>
      </div>
    ),
    booked: (
      <div
        // ref={ref}
        className="rounded-lg text-white bg-green-400 border-solid border border-green-400 h-32 p-2"
        onClick={() => {
          props.onEventSelect(props.value);
        }}
      >
        <div className="text-xs lowercase">{props.value.time}</div>
        <div className="text-2xl capitalize">{props.value.bookedTo}</div>
      </div>
    ),
  };
  // drag(drop(ref));
  return elements[props.value.isBooking] || elements.open;
};

export default EventCard;
