import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {GitHubUser, GitHubUserRepo} from "../../types/responseType"

export const apiCalls = createApi({
    reducerPath: 'apiCalls',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/users/'
    }),
    endpoints: (builder) => ({
        searchUsername: builder.query<GitHubUser, {username: string}>({
            query: (username) => {
                return {
                    url: `${username}`,
                    method: 'get'
                }
            }
        }),
        searchRepo: builder.query<GitHubUserRepo, {username: string}>({
            query: (username) => {
                return {
                    url: `${username}/repos`,
                    method: 'get'
                }
            }
        })
    })
})

export const {
    useLazySearchRepoQuery,
    useLazySearchUsernameQuery
} = apiCalls