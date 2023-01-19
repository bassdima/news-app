import { Box } from '@mui/material';
import { useParams } from "react-router-dom";
import { articleApi } from '../../services/ArticleService';
import { ArrowLinkIcon } from '../../Components/ArrowLinkIcon';
import { LinkButton } from "../../Components/LinkButton";
import { ProgressInformation } from '../../Components/ProgressInformation';
import { ArticleContentCard } from '../../Components/ArticleContentCard';
import { BackgroundArticlePage } from '../../Components/BackgroundArticlePage';

export const ArticlePage = () => {
    const { id } = useParams();
    const { data: responseData, error, isLoading } = articleApi.useFetchArticleByIdQuery(id!);

    return (
        <>
            <ProgressInformation
                loadingInfo={isLoading}
                errorInfo={error}
            />
            {responseData && responseData.filter((item) => item.id.toString() === id).map((item) => {
                return (
                    <Box
                        key={item.id}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <BackgroundArticlePage imageUrl={item.imageUrl} />
                        <ArticleContentCard title={item.title} summary={item.summary}>
                            <LinkButton
                                linkTo='/'
                                text='Back to homepage'
                                childrenArrowLeft={<ArrowLinkIcon fontSize='inherit' transform='matrix(-1, 0, 0, 1, 0, 0)' />}
                            />
                        </ArticleContentCard>
                    </Box>
                )
            })}
        </>
    )
}
