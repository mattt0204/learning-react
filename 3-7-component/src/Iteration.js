import React, { useState } from 'react';

const Iteration = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈' },
    { id: 2, text: '비' },
    { id: 3, text: '얼음' },
    { id: 4, text: '바람' }
  ]);

  const [nextText, setNextText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => {
    setNextText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({ id: nextId, text: nextText }); // 실행1
    setNames(nextNames); // 살행 2
    setNextText(''); // 실행 3
    setNextId(nextId + 1); // 실행 4
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames); // 살행 2
  };
  const nameList = names.map(name => (
    <li onDoubleClick={() => onRemove(name.id)} key={name.id}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={nextText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Iteration;
