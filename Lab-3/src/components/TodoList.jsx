import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTask) => {
    setTodos([...todos, { id: Date.now(), task: newTask }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <AddTodoForm onAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          onDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
