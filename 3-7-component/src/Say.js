import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  const onClickEnter = () => setMessage('안녕하세요');
  const onClickExit = () => setMessage('안녕히가세요');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={() => onClickExit()}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파랑색
      </button>
    </div>
  );
};

export default Say;
