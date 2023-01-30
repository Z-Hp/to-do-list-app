import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(toDo) {
    setListItems((prevValue) => {
      return [...prevValue, toDo];
    });
  }

  function deleteItem(id) {
    setListItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />

      <div>
        <ul>
          {listItems.map((item, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
