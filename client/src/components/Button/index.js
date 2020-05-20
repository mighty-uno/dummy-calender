import React from "react";

const Button = (props) => {
  const { color, className, icon } = props;
  const icons = {
    cancel: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // x="0px"
        // y="0px"
        // width="32"
        class="fill-current w-6 h-6 mr-2"
        // height="32"
        viewBox="0 0 172 172"
        style={{ fill: "#ffffff" }}
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#cccccc">
            <path d="M80.625,10.75c-38.50683,0 -69.875,31.36817 -69.875,69.875c0,38.50683 31.36817,69.875 69.875,69.875c38.50683,0 69.875,-31.36817 69.875,-69.875c0,-38.50683 -31.36817,-69.875 -69.875,-69.875zM80.625,21.5c32.71192,0 59.125,26.41308 59.125,59.125c0,32.71192 -26.41308,59.125 -59.125,59.125c-32.71192,0 -59.125,-26.41308 -59.125,-59.125c0,-32.71192 26.41308,-59.125 59.125,-59.125zM59.125,51.52442l-7.60058,7.60058l3.82129,3.7793l17.67871,17.7207l-17.67871,17.72071l-3.82129,3.77929l7.60058,7.60058l3.7793,-3.82128l17.7207,-17.67872l17.72071,17.67872l3.77929,3.82128l7.60058,-7.60058l-3.82128,-3.77929l-17.67872,-17.72071l17.67872,-17.7207l3.82128,-3.7793l-7.60058,-7.60058l-3.77929,3.82129l-17.72071,17.67871l-17.7207,-17.67871z"></path>
          </g>
        </g>
      </svg>
    ),
  };
  return (
    <button
      className={`bg-${color}-500 hover:bg-${
        props.color || "blue"
      }-700 text-white font-bold py-2 px-4 border border-${
        color || "blue"
      }-700 rounded inline-flex items-center justify-center ${
        className || ""
      } `}
      {...props}
    >
      {icons[icon] || (
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 172 172"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      )}

      <span> {props.children}</span>
    </button>
  );
};

export default Button;
