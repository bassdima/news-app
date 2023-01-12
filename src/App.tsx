import { HomePage } from './pages/HomePage';
import { ArticleRoutes } from './routes';
import { NotFound } from './pages/NotFound';
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/article-page/*' element={<ArticleRoutes />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
