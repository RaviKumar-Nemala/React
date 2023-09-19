import {configureStore , createSlice} from '@reduxjs/toolkit'

let songsSlice = createSlice({

     name : 'songs', 
     initialState : [], 
     reducers :{
          addSong(state, action)
          {
               //this state only contains the data of songsSlice not any other slices
               state.push( action.payload);
          },
          removeSong(state, action)
          {
               let idx = state.indexOf(action.payload);
               if( idx !=-1 )
               { 
                    state.splice(idx,1);
               }
          }
     }
})

//here songs is the key 
/*
     songsSlice.reducer 
     here reducer is the property in the songsSlice
     it holds all the small reducers in the slice as a large reducer
*/
let store = configureStore({
     reducer : { songs : songsSlice.reducer}
});

// type specifies which reducer function has to call
// here songs is the name attribute in the songsSlice
//addSong is the one of the reducer function in the songsSlice
store.dispatch({type: 'songs/addSong',payload:'Hell and Heaven'});

let final_state = store.getState();

console.log( final_state );

//instead of calling the dispatcher function with the manual configuration 
//we will do better by using the actions functions
/*
     each slice has an attribute called as the actions
     used to return the object of specific reducer object  which contains { type , payload}
*/

//example;

console.log( songsSlice.actions)

//it returns the object  
console.log( songsSlice.actions.addSong())

//use the above function in the dispatcher function to simplify the process of invoking the specified reducer function

//sets the specified payload value 

console.log( songsSlice.actions.addSong('new Song'));

//call the dispatch function

store.dispatch(songsSlice.actions.addSong('new Song'))

console.log( store.getState() );

store.dispatch(songsSlice.actions.removeSong('new Song'));

console.log( store.getState())