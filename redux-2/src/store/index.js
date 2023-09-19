import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer  , addMovie , removeMovie  } from "./slices/MoivesSlice";
import { songsReducer ,  addSong , removeSong  } from "./slices/SongsSlice";

let store =  configureStore(
     {
     reducer : {
          songs: songsReducer,
          movies:moviesReducer
     }
});

console.log( store );

export { store ,  addMovie  , removeMovie , addSong, removeSong };