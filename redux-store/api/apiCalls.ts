import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCalls = createApi({
    reducerPath: 'apiCalls',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/users/'
    }),
    endpoints: (builder) => ({
        searchUsername: builder.query({
            query: (username: string) => {
                return {
                    url: `${username}`,
                    method: 'get'
                }
            }
        }),
        searchRepo: builder.query({
            query: (username: string) => {
                return {
                    url: `${username}/repos`,
                    method: 'get'
                }
            }
        })
    })
})

export const {
    useSearchUsernameQuery,
    useSearchRepoQuery
} = apiCalls