import {configureStore} from '@reduxjs/toolkit';
import {moviesReducer,addMovie, removeMovie} from './slices/MoviesSlice.js';
import {songsReducer, addSong, removeSong} from './slices/SongsSlice.js';
import {reset} from './actions';

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});

export {store};
export {reset, addMovie, removeMovie, addSong, removeSong};
