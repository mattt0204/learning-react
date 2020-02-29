import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
const TodoInsertBlock = styled.div`
	.TodoInsert {
		display: flex;
		background: #495057;
		input {
			background: none;
			outline: none;
			border: none;
			padding: 0.5rem;
			font-size: 1.125rem;
			line-height: 1.5;
			color: white;
			/* 속성에 접근하는 연산자 */
			&::placeholder {
				color: #dee2e6;
			}

			/* 버튼을 제외한 영역을 모두 차지하기 */
			flex: 1;
		}
		button {
			outline: none;
			border: none;
			background: #868e96;
			color: white;
			font-size: 1.5rem;
			padding-left: 1rem;
			padding-right: 1rem;
			display: flex;
			align-items: center;
			cursor: pointer;
			transition: 0.1s ease-in;
			/* 상태에 접근하는 연산자 */
			&:hover {
				background: #adb5bd;
			}
		}
	}
`;
const TodoInsert = ({ onInsert }) => {
	const [value, setValue] = useState('');
	//재사용할 수 있도록 usecallback 사용
	const onChange = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		e => {
			onInsert(value);
			setValue('');
			// submit 이벤트는 브라우저에서 새로고침을 발생시킵니다. 이를 방지하기 위해서
			e.preventDefault();
		},
		[onInsert, value],
	);

	return (
		<TodoInsertBlock>
			<form className="TodoInsert" onSubmit={onSubmit}>
				<input
					value={value}
					onChange={onChange}
					placeholder="할 일을 입력하세요"
				></input>
				<button type="submit">
					<MdAdd />
				</button>
			</form>
		</TodoInsertBlock>
	);
};

export default TodoInsert;
