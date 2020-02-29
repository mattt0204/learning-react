import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef } from 'react';
import { useCallback } from 'react';

const App = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: '1',
			checked: true,
		},
		{
			id: 2,
			text: '2',
			checked: true,
		},
		{
			id: 3,
			text: '3',
			checked: false,
		},
	]);
	const nextId = useRef(4);

	const onInsert = useCallback(
		text => {
			const todo = { id: nextId.current, text, checked: false };
			const newTodos = todos.concat(todo);
			setTodos(newTodos);
			nextId.current += 1;
		},
		[todos],
	);
	const onRemove = useCallback(
		id => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[todos],
	);
	const onToggle = useCallback(
		id => {
			setTodos(
				todos.map(todo =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo,
				),
			);
		},
		[todos],
	);

	return (
		<div>
			<TodoTemplate>
				<TodoInsert onInsert={onInsert} />
				<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
			</TodoTemplate>
		</div>
	);
};

export default App;
