import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=5e9dbc5e923549c8a35d4af559c3672c`,
    );
  }, [category]);

  // 로딩 중
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  // 데이터가 안 왔을때
  if (!response) {
    return null;
  }
  // 에러가 발생시
  if (error) {
    return <NewsListBlock>에러 발생 !</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles &&
        articles.map((article) => (
          <NewsItem key={article.url} article={article}></NewsItem>
        ))}
    </NewsListBlock>
  );
};

export default NewsList;
