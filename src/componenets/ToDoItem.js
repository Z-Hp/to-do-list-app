export default function ToDoItem(props) {
  return (
    <div className="to-do-item">
      <ul>
        {props.text.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
