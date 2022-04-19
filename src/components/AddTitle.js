import { useState } from "react";
import classes from "./AddTitle.module.css";
import Vector from "../svgs/Vector.js";

const AddTitle = (props) => {
  const [cancelPressed, setCancelPressed] = useState(false);
  const [donePressed, setDonePressed] = useState(false);

  const inputTitleHandler = (e) => {
    // when text is input it grabs the input text (value)
    props.setInputTitle(e.target.value);
  };

  const cancelBtnHandler = () => {
    // return to list display state
    props.setIsCreating(false);
    // clearing out input
    props.setInputTitle("");
  };

  const doneHandler = () => {
    // in case coming from edit state - replace the editted entry with the new title
    // if delete entire list title input when editing this will catch
    if (props.inputTitle.length > 0) {
      // if the array of lists includes the list selected by edit
      if (props.lists.includes(props.itemSelected)) {
        // getting the index of the list item selected to use in splice
        let index = props.lists.indexOf(props.itemSelected);
        // removes one arr element at the index (deleting the list item)
        props.lists.splice(index, 1);
      }
    }
    // calling fn for adding the new list item
    props.addToList();
  };

  return (
    <div>
      <div className={classes.navcontainer}>
        <div
          className={classes.cancelcontainer}
          onClick={() => cancelBtnHandler()}
          onMouseDown={() => setCancelPressed(true)}
          onMouseUp={() => setCancelPressed(false)}
        >
          <Vector
            className={classes.arrow}
            fill={cancelPressed ? "#2FE6FF" : "#242424"}
          />
          <p
            className={
              cancelPressed
                ? `${classes.canceltext} ${classes.canceltextpress}`
                : classes.canceltext
            }
          >
            Cancel
          </p>
        </div>
        <div
          className={classes.donecontainer}
          onClick={() => doneHandler()}
          onMouseDown={() => setDonePressed(true)}
          onMouseUp={() => setDonePressed(false)}
        >
          <p
            className={
              donePressed
                ? `${classes.donetext} ${classes.donetextpress}`
                : classes.donetext
            }
          >
            Done
          </p>
        </div>
      </div>

      <input
        type="text"
        id="title"
        name="title"
        placeholder="List title"
        value={props.inputTitle}
        onChange={inputTitleHandler}
        className={classes.inputtitle}
        autoFocus
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            doneHandler();
          }
        }}
      />
    </div>
  );
};

export default AddTitle;
