import React, { useState, useEffect } from "react";
import {
  DayCard,
  EventCard,
  Popup,
  Schedule,
  ReSchedule,
} from "../../components";
import { connect } from "react-redux";
import { addEvent, getEvents } from "../../actions";

const days = [
  {
    day: "Sunday",
    date: "2020-05-17",
    isBooking: "blocked",
  },
  {
    day: "Monday",
    date: "2020-05-18",
    isBooking: "open",
  },
  {
    day: "Tuesday",
    date: "2020-05-19",
    isBooking: "open",
  },

  {
    day: "Wednesday",
    date: "2020-05-20",
    isBooking: "open",
  },
  {
    day: "Thursday",
    date: "2020-05-21",
    isBooking: "open",
  },
  {
    day: "Friday",
    date: "2020-05-22",
    isBooking: "open",
  },
  {
    day: "Saturday",
    isBooking: "blocked",
    date: "2020-05-23",
  },
];

const times = [
  { time: "8 AM", isBooking: "blocked" },
  { time: "9 AM", isBooking: "open" },
  { time: "10 AM", isBooking: "open" },
  { time: "11 AM", isBooking: "open" },
  { time: "12 PM", isBooking: "open" },
  { time: "1 PM", isBooking: "blocked" },
  { time: "2 PM", isBooking: "open" },
  { time: "3 PM", isBooking: "open" },
  { time: "4 PM", isBooking: "open" },
  { time: "5 PM", isBooking: "open" },
  { time: "6 PM", isBooking: "open" },
  { time: "7 PM", isBooking: "blocked" },
  { time: "8 PM", isBooking: "blocked" },
  { time: "9 PM", isBooking: "blocked" },
  { time: "10 PM", isBooking: "blocked" },
  { time: "11 PM", isBooking: "blocked" },
  { time: "12 AM", isBooking: "blocked" },
  { time: "1 AM", isBooking: "blocked" },
  { time: "2 AM", isBooking: "blocked" },
  { time: "3 AM", isBooking: "blocked" },
  { time: "4 AM", isBooking: "blocked" },
  { time: "5 AM", isBooking: "blocked" },
  { time: "6 AM", isBooking: "blocked" },
  { time: "7 AM", isBooking: "blocked" },
];

const bookingData = [
  {
    bookedTo: "Himanshu Sharma",
    time: "9 AM",
    day: "Monday",
    date: "2019-09-12 9:00 AM",
  },

  {
    bookedTo: "Alex John",
    time: "2 PM",
    day: "Tuesday",
    date: "2019-09-12 9:00 AM",
  },
];

const Home = (props) => {
  const { addEvent, getEvents, events } = props;
  const [openPopup, setOpenPopup] = useState(null);
  const [isEventLoading, setIsEventLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const selectEvent = (req) => {
    setOpenPopup(req);
  };

  const updateNotification = (msg) => {
    setNotification(msg);

    setTimeout(() => {
      setNotification(null);
    }, 1000);
  };

  const scheduleEvent = async (bookedTo, value) => {
    if (bookedTo.trim() == "") {
      updateNotification("Name is required");
      return;
    }
    await addEvent({ ...value, bookedTo });
  };

  const findEvent = (day, time) => {
    const booking = events.find((booking) => {
      return (
        booking.time.toLowerCase() == time.time.toLowerCase() &&
        day.day.toLowerCase() == booking.day.toLowerCase()
      );
    });

    return booking
      ? { ...booking, isBooking: "booked" }
      : {
          ...day,
          ...time,
          booking:
            day.isBooking == "blocked" || time.isBooking == "blocked"
              ? "blocked"
              : "open",
        };
  };

  const closePopup = () => {
    setOpenPopup(null);
  };

  const loadEvents = async () => {
    setIsEventLoading(true);
    await getEvents();
    setIsEventLoading(false);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="h-screen p-4 flex">
      {notification ? (
        <div
          class="fixed shadow-2xl bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p class="font-bold">Info</p>
          <p class="text-sm">{notification}</p>
        </div>
      ) : null}
      {openPopup ? (
        <Popup onClose={closePopup}>
          {openPopup.isBooking == "open" ? (
            <Schedule
              value={openPopup}
              setEvent={scheduleEvent}
              onClose={closePopup}
            ></Schedule>
          ) : (
            <ReSchedule onClose={closePopup} value={openPopup}></ReSchedule>
          )}
        </Popup>
      ) : null}

      <div className="w-full">
        <div className="w-full py-2 px-16">
          <div className="header w-full h-16 h-24 mb-4 flex items-center grid grid-cols-8 gap-4 text-center">
            <div></div>
            {days.map((r, i) => (
              <DayCard key={i} value={r} />
            ))}
          </div>

          <div className="calenderEvent flex items-center grid grid-cols-8 gap-4">
            {times.map((time, i) => (
              <>
                <div className="font-semibold flex items-center flex-row justify-end text-right h-32 ">
                  {time.time}
                </div>
                {days.map((day, i) => (
                  <EventCard
                    onEventSelect={(v) => {
                      selectEvent(v);
                    }}
                    key={i}
                    value={findEvent(day, time)}
                  />
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
function mapStateToProps({ events }) {
  return { events };
}
export default connect(mapStateToProps, { addEvent, getEvents })(Home);
