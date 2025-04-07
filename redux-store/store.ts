import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit'
import { apiCalls } from './api/apiCalls'
import { setupListeners } from '@reduxjs/toolkit/query'
import darkmodeReducer from './slices/darkmode'

export const store = configureStore({
    reducer: {
        [apiCalls.reducerPath]: apiCalls.reducer,
        darkmode: darkmodeReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(apiCalls.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>; 