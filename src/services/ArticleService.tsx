import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IArticle } from '../models';

export const articleApi = createApi({
    reducerPath: 'articleAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spaceflightnewsapi.net' }),
    endpoints: (build) => ({
        fetchAllArticles: build.query<IArticle[], number>({
            query: (limit: number) => ({
                url: '/v3/articles',
                params: {
                    _limit: limit
                }
            })
        })
    })
})