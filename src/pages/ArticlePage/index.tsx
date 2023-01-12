import { useParams } from "react-router-dom";

export const ArticlePage = () => {
    const { id } = useParams();

    return (
        <div>Article Page {id}</div>
    );
}
