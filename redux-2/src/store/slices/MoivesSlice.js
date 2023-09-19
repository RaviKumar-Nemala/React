import {createSlice} from '@reduxjs/toolkit'

let moviesSlice = createSlice(
   {
      name : "movie",
      initialState : ["hell"] ,
      reducers  : {

          addMovie ( state  , action)
          {
               state.push( action.payload)
          },
          removeMovie(state, action)
          {
               let idx = state.indexOf( action.payload);
               if( idx != -1 )
               { 
                    state.splice( idx , 1 );
               }
          }
      }


   }

)

export const { addMovie , removeMovie}  = moviesSlice.actions;

export const moviesReducer =  moviesSlice.reducer;
