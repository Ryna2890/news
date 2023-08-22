import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Theme {
    mode: string,
    font: string

}

export interface pageSettings {
    perPage: number;
    cardTitle?: string;
    theme: Theme;
}

const initialState: pageSettings = {
    perPage: 6,
    cardTitle: '',
    theme: {
        mode: 'lightTheme',
        font: 'big'
    }
}

export const pageSettings = createSlice({
    name: 'pageSettings',
    initialState,
    reducers: {
        perPage: (state, action: PayloadAction<number>) => {
            state.perPage = action.payload;
        },
        cardTitle: (state, action: PayloadAction<string>) => {
            state.cardTitle = action.payload;
        },
        siteTheme: (state, action: PayloadAction<string>) => {
            state.theme.mode = action.payload;
        },
        siteFont: (state, action: PayloadAction<string>) => {
            state.theme.font = action.payload;
        }
    },
})

export const {perPage, cardTitle, siteTheme,siteFont} = pageSettings.actions

export default pageSettings.reducer