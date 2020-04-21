import React from 'react';
import { Route } from 'react-router-dom';
import Newspage from './pages/Newspage';

const App = () => {
  return (
    <>
      {/* :는 url파라미터의 표시 ?는  있어도 되고 없어도 된다라는 의미 */}
      <Route component={Newspage} path="/:category?" />
    </>
  );
};

export default App;
