import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../actions";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            if (index === undefined || index === null) {
                throw new Error(`The ${action.payload} does not exist in the store`)
            }
            state.splice(index, 1)
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});

export const songsReducer = songsSlice.reducer;
export const {addSong, removeSong} = songsSlice.actions;

