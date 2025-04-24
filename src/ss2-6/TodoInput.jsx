import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <input
        type="text"
        placeholder="Thêm công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, padding: '8px' }}
      />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>Thêm</button>
    </div>
  );
};

export default TodoInput;