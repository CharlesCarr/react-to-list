import ListItem from "./ListItem";
import classes from "./CheckList.module.css";
import Plus from '../svgs/Plus';

const CheckList = (props) => {

  const defaultItem = (
    <li className={classes.listitem}>
      <p className={classes.listtitle}>To Do Item</p>
      <Plus className={classes.listplus} onClick={() => props.setIsCreating(true)}/>
    </li>
  );

  return (
    <ul className={classes.fulllist}>
      {props.lists < 1 && defaultItem}
      {props.lists.map((list) => (
        <ListItem
          // in production would have real uid
          key={Math.random() * 1000}
          list={list}
          lists={props.lists}
          setLists={props.setLists}
          setIsCreating={props.setIsCreating}
          setInputTitle={props.setInputTitle}
          setItemSelected={props.setItemSelected}
        />
      ))}
    </ul>
  );
};

export default CheckList;
