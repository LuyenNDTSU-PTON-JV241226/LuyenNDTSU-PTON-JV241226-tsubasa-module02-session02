import React from 'react';

const TodoItem = ({ task, onDelete }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      <input type="checkbox" style={{ marginRight: '10px' }} />
      <span style={{ flex: 1 }}>{task.title}</span>
      <button onClick={() => onDelete(task.id)} style={{ backgroundColor: 'red', color: 'white' }}>Xóa</button>
    </li>
  );
};

export default TodoItem;