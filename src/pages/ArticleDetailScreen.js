import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticleDetailScreen = () => {
  const location = useLocation();
  const splitLocation = location.pathname.split('/');
  const article = JSON.parse(localStorage.getItem('article'));

  const renderArticle = article.map(
    (item) =>
      Number(splitLocation[2]) === item.id && (
        <div className='bg-gray-300 h-full w-96 p-8'>
          <div className='flex justify-between'>
            <h2 className='mb-3'>{item.title}</h2>
          </div>
          <p className='mb-3'>{item.content}</p>
          <span>
            {' '}
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }).format(item.timestamp)}
          </span>
        </div>
      )
  );

  return renderArticle;
};

export default ArticleDetailScreen;
