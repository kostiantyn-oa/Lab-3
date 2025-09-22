import { useState } from "react";

function TodoItem({ id, task, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className={`todo-item ${isCompleted ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />
      <span>{task}</span>
      <button onClick={() => onDelete(id)}>Видалити</button>
    </div>
  );
}

export default TodoItem;
