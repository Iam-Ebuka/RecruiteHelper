import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialState {
    darkmode: boolean
}

const initialState: InitialState = {
    darkmode: false
}

const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        changeDarkMode: (state, action: PayloadAction<InitialState>) => {
            state.darkmode = action.payload.darkmode
        }
    }
})

export const { changeDarkMode } = darkmodeSlice.actions

export default darkmodeSlice.reducer;

export const selectDarkmode = (state: RootState) => state.darkmode.darkmode