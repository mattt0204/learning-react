import React from 'react';

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, done } = todo;
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(id)}
        checked={done}
        readOnly={true}
      ></input>
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
