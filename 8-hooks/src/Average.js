import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균 계산 중...');
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const ref = useRef(null);

  const onChange = useCallback(e => {
    console.log('input change');
    setNumber(e.target.value);
  }, []); // 첫 렌더링 때만 함수 생성
  const onInsert = useCallback(() => {
    console.log('list change');
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber('');
    ref.current.focus();
  }, [list, number]); // list 또는 number가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={ref} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <div>
        <b>평균값 :</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
