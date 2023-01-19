import { HomePage, ArticlePage, NotFound } from './pages';
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
