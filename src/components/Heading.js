import classes from "./Heading.module.css";
import PenToSquare from "../svgs/PenToSquare";

const Heading = (props) => {
  return (
    <div className={classes.headingContainer}>
      <div className={classes.leftHead}>
        <h1 className={classes.title}>To Do</h1>
      </div>

      <div className={classes.rightHead}>
        <PenToSquare onClick={() => props.setIsCreating(true)} />
      </div>
    </div>
  );
};

export default Heading;