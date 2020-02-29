import React from 'react';
import styled, { css } from 'styled-components';
import {
	MdCheckBoxOutlineBlank,
	MdRemoveCircleOutline,
	MdCheckBox,
} from 'react-icons/md';
const TodoListItemBlock = styled.div`
	.TodoListItem {
		padding: 1rem;
		display: flex;
		align-items: center;

		.checkbox {
			cursor: pointer;
			/* 삭제 버튼을 제외한 부분이 남은부분을 차지하기 */
			flex: 1;
			display: flex;
			align-items: center;
			svg {
				font-size: 1.5rem;
			}
			.text {
				margin-left: 1.5rem;
				flex: 1;
			}
			/* 체크 되었을 때 */
			/* 이때의 props는 TodoListItemBlock의 속성입니다. */
			${props =>
				props.checked &&
				css`
					svg {
						color: #22b8cf;
					}
					.text {
						color: #adb5bd;
						text-decoration: line-through;
					}
				`}
		}

		.remove {
			display: flex;
			align-items: center;
			font-size: #ff6b6b;
			cursor: pointer;
			&:hover {
				color: #ff8787;
			}
		}
	}

	& + & {
		border-top: 1px solid #dee2e6;
	}
	&:nth-child(even) {
		background: #f8f9fa;
	}
`;
const TodoListItem = ({ todo, onRemove, onToggle }) => {
	const { id, text, checked } = todo;
	return (
		<TodoListItemBlock checked={checked}>
			<div className="TodoListItem">
				<div className="checkbox" onClick={() => onToggle(id)}>
					{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
					<div className="text">{text}</div>
				</div>
				<div className="remove" onClick={() => onRemove(id)}>
					<MdRemoveCircleOutline />
				</div>
			</div>
		</TodoListItemBlock>
	);
};

export default TodoListItem;
