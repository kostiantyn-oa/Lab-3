# Lab 3: Component Tree. Hooks

## Component Tree + Data Flow
```mermaid
graph TD
    App["App(composition root)no state"]
    TodoList["TodoList
    ━━━━━━━━━━━━━━
    STATE:• todos: [{id, task}]
    ━━━━━━━━━━━━━━
    METHODS:• handleAddTodo(newTask)• handleDeleteTodo(id)"]
    AddTodoForm["AddTodoForm
    ━━━━━━━━━━━━━━
    STATE:• newTask: string
    ━━━━━━━━━━━━━━
    PROPS:• onAddTodo()"]
    TodoItem["TodoItem
    ━━━━━━━━━━━━━━
    STATE:• isCompleted: boolean
    ━━━━━━━━━━━━━━
    PROPS:• id• task• onDelete()"]
    Checkbox["[Checkbox]toggle isCompleted(локальна зміна стилю)"]
    DeleteBtn["[Delete Button]onClick"]
    App -->|renders| TodoList
    TodoList -->|"renderspasses: onAddTodo"| AddTodoForm
    TodoList -->|"renders with mappasses: id + task + onDelete"| TodoItem
    AddTodoForm -.->|"⬆️ DATA FLOWonAddTodo(newTask)"| TodoList
    TodoItem --> Checkbox
    TodoItem --> DeleteBtn
    DeleteBtn -.->|"⬆️ DATA FLOWonDelete(id)"| TodoList
    style App fill:#e1f5ff,stroke:#01579b,stroke-width:3px
    style TodoList fill:#fff9c4,stroke:#f57f17,stroke-width:3px
    style AddTodoForm fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    style TodoItem fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px
    style Checkbox fill:#fff,stroke:#666,stroke-width:1px
    style DeleteBtn fill:#ffebee,stroke:#b71c1c,stroke-width:1px
```

### Пояснення діаграми
- **App**: Кореневий компонент, який рендерить лише `TodoList`. Не тримає стану, відповідає за композицію.
- **TodoList**:
  - **State**: `todos` — масив об’єктів `{ id, task }`, що представляє список завдань.
  - **Props**: Не отримує props.
  - **Рендерить**: `AddTodoForm` для додавання завдань і список `TodoItem` для кожного завдання.
  - **Callbacks**: Передає `onAddTodo` до `AddTodoForm` для додавання нового завдання і `onDelete` до `TodoItem` для видалення.
- **AddTodoForm**:
  - **State**: `newTask` — рядок, який зберігає текст із поля введення.
  - **Props**: Отримує `onAddTodo` (callback) для відправки нового завдання до `TodoList`.
  - **Callback**: Викликає `onAddTodo(newTask)` при submit форми, передаючи текст завдання вгору.
- **TodoItem**:
  - **State**: `isCompleted` — boolean, який визначає, чи завдання завершене (локальний стан).
  - **Props**: Отримує `id` (унікальний ідентифікатор), `task` (текст завдання), `onDelete` (callback для видалення).
  - **Callbacks**: Викликає `onDelete(id)` при натисканні кнопки "Видалити", повідомляючи `TodoList` про необхідність видалити завдання.
  - Checkbox змінює локальний стан `isCompleted`, що впливає на стиль (перекреслення).