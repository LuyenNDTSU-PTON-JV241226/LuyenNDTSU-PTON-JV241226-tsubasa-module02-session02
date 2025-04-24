import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoListIndex = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Cras justo odio', completed: false },
    { id: 2, title: 'Cras justo odio', completed: false }
  ]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ width: '500px', margin: 'auto', marginTop: '50px' }}>
      <h2>Quản lý công việc</h2>
      <TodoInput onAdd={addTask} />
      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default TodoListIndex;

