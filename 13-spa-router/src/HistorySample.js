import React, { useEffect } from 'react';

const HistorySample = ({ history }) => {
  const handleGoBack = () => {
    history.goBack();
  };
  const handleGoHome = () => {
    history.push('/');
  };

  // unmount 할 때 설정
  useEffect(() => {
    return history.block('정말 떠나실건가요?');
  }, [history]);

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
