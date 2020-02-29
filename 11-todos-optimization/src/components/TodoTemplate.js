import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
	.TodoTemplate {
		width: 512px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 6rem;
		border-radius: 4px;
		overflow: hidden;
	}
	.app-title {
		background: #22b8cf;
		color: white;
		height: 4rem;
		font-size: 1.5rem;
		display: flex;
		/* 위 아래 */
		align-items: center;
		/* 좌우 */
		justify-content: center;
	}
	.content {
		background: white;
	}
`;

const TodoTemplate = ({ children }) => {
	return (
		<TodoTemplateBlock>
			<div className="TodoTemplate">
				<div className="app-title">일정 관리</div>
				<div className="content">{children}</div>
			</div>
		</TodoTemplateBlock>
	);
};

export default TodoTemplate;
