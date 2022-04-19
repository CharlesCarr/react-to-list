import { useState } from "react";
import CheckList from "./components/CheckList";
import Heading from "./components/Heading";
import AddTitle from "./components/AddTitle";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [itemSelected, setItemSelected] = useState();

  // function called when adding title in AddTitle.js
  const addToList = () => {
    // if title is not blank (**in real project would alert user if blank**)
    if (inputTitle.length > 0) {
      // add the title to the array of all check list titles
      setLists([...lists, inputTitle]);
      // resetting input to blank
      setInputTitle("");
      // set state back to displaying the list
      setIsCreating(false);
    }
  };

  return (
    <div className="App">
      {!isCreating && <Heading setIsCreating={setIsCreating} />}
      {!isCreating && (
        <CheckList
          lists={lists}
          setLists={setLists}
          setIsCreating={setIsCreating}
          setInputTitle={setInputTitle}
          setItemSelected={setItemSelected}
        />
      )}
      {isCreating && (
        <AddTitle
          lists={lists}
          setIsCreating={setIsCreating}
          addToList={addToList}
          inputTitle={inputTitle}
          setInputTitle={setInputTitle}
          itemSelected={itemSelected}
        />
      )}
    </div>
  );
}

export default App;
