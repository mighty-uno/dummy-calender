import React, { useState } from "react";
import { Button } from "../../components";
const Schedule = (props) => {
  const { value, onClose, setEvent } = props;
  const [name, setName] = useState("");
  return (
    <div>
      <input
        placeholder="enter name"
        value={name}
        className="bg-gray-200 h-12  my-4 w-full rounded-lg leading-normal px-4"
        onChange={(v) => {
          setName(v.target.value);
        }}
      ></input>
      <div className="grid grid-cols-2 w-full space-x-4">
        <Button
          onClick={() => {
            setEvent(name, value);
          }}
          color="green"
        >
          Schedule
        </Button>
        <Button icon="cancel" onClick={onClose} color="red">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Schedule;
