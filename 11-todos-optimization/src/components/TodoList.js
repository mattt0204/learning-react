import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
import { List } from 'react-virtualized';

const TodoListBlock = styled.div`
	.TodoList {
		min-height: 320px;
		max-height: 513px;
		overflow-y: auto;
	}
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
	const rowRenderer = useCallback(
		({ index, key, style }) => {
			const todo = todos[index];
			return (
				<TodoListItem
					todo={todo}
					key={key}
					onRemove={onRemove}
					onToggle={onToggle}
					style={style}
				></TodoListItem>
			);
		},
		[onRemove, onToggle, todos],
	);
	return (
		<TodoListBlock>
			<List
				className="TodoList"
				width={512}
				height={513}
				rowCount={todos.length}
				rowHeight={57}
				rowRenderer={rowRenderer}
				list={todos}
				style={{ outline: 'none' }}
			></List>
		</TodoListBlock>
	);
};

export default React.memo(TodoList);
