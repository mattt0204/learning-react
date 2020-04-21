import React from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';

const Newspage = ({ match }) => {
  // 지정되지 않았을 때는 all을 기본으로 설정
  const category = match.params.category || 'all';
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default Newspage;
