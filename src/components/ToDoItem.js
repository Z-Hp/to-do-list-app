import { useState } from "react";

export default function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="to-do-item">
      <li style={{ backgroundColor: isDone ? "#fdcb6e" : "transparent" }}>
        {props.text}
      </li>
      <button
        onClick={handleClick}
        style={{ display: isDone ? "none" : "block" }}
      >
        <span>Done</span>
      </button>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
      >
        <span>Delete</span>
      </button>
    </div>
  );
}
