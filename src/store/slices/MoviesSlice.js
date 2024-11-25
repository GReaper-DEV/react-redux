import {createSlice} from "@reduxjs/toolkit";
import {reset} from '../actions';

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            if (index === undefined || index === null) {
                throw new Error(`The ${action.payload} does not exist in the store`)
            }
            state.splice(index, 1)
        },
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});

export const {addMovie, removeMovie} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;