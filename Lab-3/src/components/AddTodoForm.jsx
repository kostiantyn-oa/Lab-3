import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTodo(newTask);
      setNewTask("");
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Додати нове завдання..."
      />
      <button type="submit">Додати</button>
    </form>
  );
}

export default AddTodoForm;
