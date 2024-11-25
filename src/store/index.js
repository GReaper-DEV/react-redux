import {configureStore, createSlice} from '@reduxjs/toolkit';


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
        }

    }
});
const moviesSlice = createSlice({
    name: 'movies',
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
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

export const {addSong, removeSong} = songsSlice.actions;
export const {addMovie, removeMovie} = moviesSlice.actions;
export {store};
