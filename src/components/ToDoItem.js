import { useState } from "react";

export default function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handelClick() {
    if (isDone === false) {
      setIsDone(true);
    } else if (isDone === true) {
      setIsDone(false);
    }
  }

  return (
    <li
      onClick={handelClick}
      style={
        isDone ? { textDecoration: "line-through" } : { textDecoration: "none" }
      }
    >
      {props.text}
    </li>
  );
}
