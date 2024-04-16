import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
let storageName = "theme";

export interface ThemeState {
    value: string;
}

const initialState: ThemeState = {
    value:
        window.localStorage.getItem(storageName) ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
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
