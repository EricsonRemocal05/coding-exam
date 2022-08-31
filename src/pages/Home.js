import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState(JSON.parse(localStorage.getItem('article')));

  console.log(article);

  const handleDelete = (id) => {
    const data = article.filter((item) => item.id !== id);

    localStorage.setItem('article', JSON.stringify(data));
    window.location.reload();
  };

  const renderArticle = article?.map((item) => (
    <div className='bg-gray-300 h-full w-96 p-8 mt-10'>
      <div className='flex justify-between'>
        <h2 className='mb-3'>{item.title}</h2>
        <div className='flex space-x-5'>
          <h3>Edit</h3>
          <h3 className='cursor-pointer' onClick={() => handleDelete(item.id)}>
            Delete
          </h3>
        </div>
      </div>
      <p className='mb-3'>{item.content}</p>
      <span>
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(item.timestamp)}
      </span>
      <h3
        onClick={() => navigate(`article/${item.id}`)}
        className='text-center underline text-blue-700 mt-10 cursor-pointer'
      >
        Click here to view more
      </h3>
    </div>
  ));

  return (
    <div>
      <button onClick={() => navigate('create-article')}>Create New Article</button>

      {renderArticle}
    </div>
  );
};

export default Home;
