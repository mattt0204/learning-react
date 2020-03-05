import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about/?detail=true">소개</Link>
        </li>
        <li>
          <Link to="/info"> 정보 소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">history 예제</Link>
        </li>
      </ul>
      <hr />
      {/* 이 아래에서 보여줍니다. */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={['/about', '/info']} component={About} exact />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        {/* path가 제공되지 않으면 모든 상황에 대해서 렌더링 되는 기능입니다. */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.params}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
