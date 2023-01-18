import { compare } from '../../helpers';
import { articleApi } from '../../services/ArticleService';
import { NewsCard } from '../../Components/NewsCard';
import { Search } from '../../Components/Search';
import { useSearchingData } from '../../hooks';
import { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ProgressInformation } from '../../Components/ProgressInformation';

export const HomePage = () => {
    const { data: responseData, error, isLoading } = articleApi.useFetchAllArticlesQuery(30);
    const [query, setQuery] = useState<Array<string>>(['']);
    const searchingData = useSearchingData(responseData, query);

    return (
        <Box sx={{
            padding: {
                xs: '25px 10px 50px',
                sm: '50px 25px 50px',
                md: '50px 112px 63px',
            },
        }}>
            <ProgressInformation
                loadingInfo={isLoading}
                errorInfo={error}
            />
            {searchingData &&
                <>
                    <Typography sx={{ fontWeight: '600', lineHeight: '20px', mb: '10px' }}>
                        Filter by keywords
                    </Typography>
                    <Search onChangeHandler={(e) => setQuery(e.target.value.toLowerCase().split(' '))} />
                    <Typography
                        sx={{
                            borderBottom: '1px solid #EAEAEA',
                            minWidth: '100%',
                            fontWeight: '600',
                            lineHeight: '20px',
                            mb: '45px'
                        }}
                    >
                        Results: {searchingData.length}
                    </Typography>
                    <Grid
                        container
                        spacing={7}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {searchingData.sort(compare('title', 'desc', query)).map((i) => {
                            return (
                                <Grid item
                                    xs={4}
                                    key={i.id}
                                >
                                    <NewsCard
                                        image={i.imageUrl}
                                        date={i.publishedAt}
                                        title={i.title}
                                        description={i.summary}
                                        id={i.id}
                                        searchWords={query}
                                    />
                                </Grid>
                            )
                        })
                        }
                    </Grid>
                </>
            }
        </Box>
    )
}
