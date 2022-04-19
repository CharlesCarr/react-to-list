import { useState } from "react";
import classes from "./Ellipses.module.css";

const Ellipses = ({ onClick }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <svg
      className={classes.svg}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={onClick}
      width="18"
      height="4"
      viewBox="0 0 18 4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.375 2C13.375 0.964844 14.2148 0.125 15.25 0.125C16.2852 0.125 17.125 0.964844 17.125 2C17.125 3.03516 16.2852 3.875 15.25 3.875C14.2148 3.875 13.375 3.03516 13.375 2ZM7.125 2C7.125 0.964844 7.96484 0.125 9 0.125C10.0352 0.125 10.875 0.964844 10.875 2C10.875 3.03516 10.0352 3.875 9 3.875C7.96484 3.875 7.125 3.03516 7.125 2ZM4.625 2C4.625 3.03516 3.78555 3.875 2.75 3.875C1.71445 3.875 0.875 3.03516 0.875 2C0.875 0.964844 1.71445 0.125 2.75 0.125C3.78555 0.125 4.625 0.964844 4.625 2Z"
        className={pressed ? classes.pressed : classes.icon}
      />
    </svg>
  );
};

export default Ellipses;