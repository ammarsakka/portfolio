import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
let storageName = "theme";

const getCurrentTheme = () => {
    const themeStorage = window.localStorage.getItem(storageName);
    const themeDefault = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    if (themeStorage) {
        return themeStorage;
    }

    if (themeDefault) {
        return "dark";
    }

    return "light";
};

export interface ThemeState {
    value: string;
}

const initialState: ThemeState = {
    value: getCurrentTheme(),
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
            window.localStorage.setItem(storageName, action.payload);
        },
    },
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;
export default themeSlice.reducer;
