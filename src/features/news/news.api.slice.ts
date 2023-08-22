import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE_URL, NEWS_API_KEY} from "./news.const";
import {NewsModel, NewsModelData} from "./news.models";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("x-api-key", NEWS_API_KEY);

            return headers;
        },
    }),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        fetchNews: builder.query<NewsModelData, void>({
            query: () => ({
                url: 'everything?q=apple&apiKey=d29f88bf32124ff980bdae4ee326b674',
            }),
            providesTags:['News']
        }),
    }),
})

 export const {useFetchNewsQuery } = apiSlice