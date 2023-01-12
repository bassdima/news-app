import { Routes, Route } from "react-router-dom";
import { ArticlePage } from '../pages/ArticlePage';
import { NotFound } from '../pages/NotFound';

export function ArticleRoutes() {
    return (
        <Routes>
            <Route path=":id">
                <Route index element={<ArticlePage />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
}
