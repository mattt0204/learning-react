import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({ username: '', message: '' });

  const onChange = e => {
    const nextForm = { ...form, [e.target.name]: e.target.value };
    setForm(nextForm);
  };
  const { username, message } = form;

  const handleClick = () => {
    alert(form.username + ':' + form.message);
    setForm({ username: '', message: '' });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="유저를 입력하세요"
        value={username}
        name="username"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="메세지를 입력하세요"
        name="message"
        value={message} // value에 들어가는 이 컴포넌트 상태의 값이지  e.target.value가 아니다.
        onChange={onChange}
        onKeyPress={onKeyPress}
      />

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default EventPractice;
