import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onRemove,
  onToggle
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = e => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input} />
        <button type="submit">등록</button>
      </form>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Todos;
