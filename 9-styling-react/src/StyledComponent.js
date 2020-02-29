import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  display: flex;
  padding: 1rem;

  /* 기본적으로 가로크기 1024px, 가운데 정렬 margin : 0 auto */
  /* 1024px 이상이면 */
  width: 1024px;
  margin: 0 auto;
  /* 1024px 이하 768이상 너비를 768px */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Button = styled.button`
  background: white;
  font-weight: 600;
  padding: 0.5rem;
  color: black;
  border-radius: 4px;
  display: flex;
  font-size: 1rem;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  & + & {
    margin-left: 1rem;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
`;

const StyledComponent = () => {
  return (
    <div>
      <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
    </div>
  );
};

export default StyledComponent;
