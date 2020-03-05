import React from 'react';
import Todos from '../components/Todos';
import { useSelector } from 'react-redux';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import useActions from '../lib/useActions';
const TodosContainer = () => {
  const { input, todos } = useSelector(state => ({
    input: state.todos.input,
    todos: state.todos.todos
  }));

  const [onChangeInput, onInsert, onRemove, onToggle] = useActions(
    [changeInput, insert, remove, toggle],
    []
  );
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onRemove={onRemove}
      onToggle={onToggle}
    />
  );
};

export default React.memo(TodosContainer);
