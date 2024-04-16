import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./stores/theme";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
