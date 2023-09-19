import { createSlice } from "@reduxjs/toolkit";


let songsSlice = createSlice( 
     {
          name :  'songs',
          initialState : [],
          reducers : {

               addSong( state, action)
               {
                    state.push( action.payload);
               },
               removeSong( state, action)
               { 
                    let idx = state.indexOf( action.payload ); 
                    state.splice( idx , 1 );
               }
          }
     }
)

export const {  addSong , removeSong }  = songsSlice.actions;

export const songsReducer = songsSlice.reducer;
