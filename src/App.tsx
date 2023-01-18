import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { NotFound } from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/article-page/:id' element={<ArticlePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
