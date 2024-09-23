import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    isDarkTheme: boolean;
}

const initialState: ThemeState = {
    isDarkTheme: true
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;