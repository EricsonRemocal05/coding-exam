import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const CreateArticle = () => {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setarticleContent] = useState('');
  const [article, setArticle] = useState([]);
  const uniqueId = Math.floor(Math.random() * 100);
  let navigate = useNavigate();
  const initialValue = JSON.parse(localStorage.getItem('article'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = [
      ...initialValue,
      { id: uniqueId, title: articleTitle, content: articleContent, timestamp: Date.now() },
    ];

    localStorage.setItem('article', JSON.stringify(newArticle));
    navigate('/');
  };

  return (
    <div className='bg-gray-300'>
      <h1 className='text-xl font-medium'>Create Article Screen</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Article Title</label>
          <input type='text' value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)} />
        </div>
        <div>
          <label>Article Content</label>
          <textarea value={articleContent} onChange={(e) => setarticleContent(e.target.value)}></textarea>
        </div>

        <button type='submit' className='px-8 py-4 bg-purple-500 text-purple-50 rounded-md'>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
