import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const TodoListBlock = styled.div`
	min-height: 320px;
	max-height: 513px;
	overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
	return (
		<TodoListBlock>
			{todos.map(todo => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					onRemove={onRemove}
					onToggle={onToggle}
				></TodoListItem>
			))}
		</TodoListBlock>
	);
};

export default TodoList;
