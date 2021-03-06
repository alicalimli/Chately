import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "right":
      return "-right-4 top-1/2 translate-x-full -translate-y-1/2";
    case "left":
      return "-left-4 top-1/2 -translate-x-full -translate-y-1/2";
    case "top":
      return "left-1/2 -translate-x-1/2 -top-full -translate-y-1/4";
    case "bottom":
      return "left-1/2 -translate-x-1/2 top-full translate-y-1/4";
    default:
      return "";
  }
}

const TwTooltip = ({ children, addClass, position }) => {
  const [positionClasses, dispatch] = useReducer(reducer, "");

  useEffect(() => dispatch({ type: position }), []);

  return (
    // NOTE: Parent Element Must Have a Group and Relative Class.
    <span
      className={`absolute shadow-md bg-gray-800 dark:bg-white text-white dark:text-black rounded-xl p-2 px-4 text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200 z-10 pointer-events-none ${positionClasses} `}
    >
      {children}
    </span>
  );
};

export default TwTooltip;
