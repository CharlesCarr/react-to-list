import { useState } from "react";
import classes from "./ListItem.module.css";
import Ellipses from "../svgs/Ellipses";
import Pencil from "../svgs/Pencil";
import Trash from "../svgs/Trash";

const ListItem = (props) => {
  const [ellipseActive, setEllipseActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [editPressed, setEditPressed] = useState(false);
  const [trashPressed, setTrashPressed] = useState(false);

  const deleteHandler = () => {
    // Goes through the lists array and if the title matches
    // then removes it from the array (b/c each element has to 'pass the test' of not being equal to the title)
    props.setLists(props.lists.filter((el) => el !== props.list));
  };

  const editHandler = () => {
    // go back to the create list state
    props.setIsCreating(true);
    // able to re enter an input (the input has the state of the previous title)
    props.setInputTitle(props.list);
    // creating/setting this state for the list item to be edited to be used with cancel/delete
    props.setItemSelected(props.list);
  };

  const dropDown = (
    <div className={classes.dropdown}>
      <div
        className={classes.editcontainer}
        onMouseDown={() => setEditPressed(true)}
        onMouseUp={() => setEditPressed(false)}
        onClick={() => editHandler()}
      >
        <Pencil
          className={classes.editimg}
          fill={editPressed ? "#2FE6FF" : "#242424"}
        />
        <p
          className={
            editPressed
              ? `${classes.edittextpress} ${classes.edittext}`
              : classes.edittext
          }
        >
          Edit
        </p>
      </div>

      <div
        className={classes.trashcontainer}
        onMouseDown={() => setTrashPressed(true)}
        onMouseUp={() => setTrashPressed(false)}
        onClick={() => deleteHandler()}
      >
        <Trash
          className={classes.trashimg}
          fill={trashPressed ? "#FF3333" : "#242424"}
        />
        <p
          className={
            trashPressed
              ? `${classes.trashtextpress} ${classes.trashtext}`
              : classes.trashtext
          }
        >
          Delete
        </p>
      </div>
    </div>
  );

  return (
    <li
      className={
        pressed
          ? `${classes.listitem} ${classes.itemclicked}`
          : classes.listitem
      }
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <p className={classes.listtitle}>{props.list}</p>
      <Ellipses onClick={() => setEllipseActive(!ellipseActive)} />

      {ellipseActive && dropDown}
    </li>
  );
};

export default ListItem;
