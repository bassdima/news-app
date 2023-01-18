import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { articleApi } from '../services/ArticleService';

const rootReducer = combineReducers({
    [articleApi.reducerPath]: articleApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(articleApi.middleware)
    });
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
