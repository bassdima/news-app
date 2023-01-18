import { Box } from '@mui/material';

interface BackgroundArticlePageProps {
    imageUrl: string
}

export const BackgroundArticlePage = ({ imageUrl }: BackgroundArticlePageProps) => {
    return (
        <Box sx={{
            minHeight: '245px',
            minWidth: '100%',
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionY: 'center',
        }} />
    );
}
