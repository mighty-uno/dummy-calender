import React from "react";
import IconCancel from "../../assets/images/icons-cancel.png";

const Popup = (props) => {
  return (
    <div className="popup h-screen w-screen flex items-center  justify-center fixed bg-gray-700 bg-opacity-25">
      <div className="popupContent p-2 w-1/3 h-auto flex items-center flex-col bg-white rounded-lg py-10 px-10">
        <div className=" h-12 w-full" onClick={props.onClose}>
          <img alt="cancel" className="h-10" src={IconCancel} />
        </div>
        <div className="content w-full">{props.children}</div>
      </div>
    </div>
  );
};

export default Popup;
