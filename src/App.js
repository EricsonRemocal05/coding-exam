import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleDetailScreen from './pages/ArticleDetailScreen';
import CreateArticle from './pages/CreateArticle';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create-article' element={<CreateArticle />} />
        <Route path='article/:id' element={<ArticleDetailScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
