import { createSlice } from "@reduxjs/toolkit";
import { createAlbumThunk } from "../thunks/createAlbum";
import { deleteAlbumThunk} from '../thunks/deleteAlbum';
import { fetchAlbums } from "../thunks/fetchAlbums";
let albumsSlice = createSlice({
     name : 'albums',
     initialState : [],
     extraReducers( builder)
     {

          builder.addCase(createAlbumThunk.fulfilled,( state,action) =>
          {
               // state.push( action.payload);
               state.push( action.payload );
          }
          )
          builder.addCase( deleteAlbumThunk.fulfilled ,(state, action)=>{
               let { userId:targetId , albumId:targetAlbumId } = action.payload;

               let updatedState = state.filter( (curr_album)=>
               {
                    let {userId, albumId}  = curr_album;
                    if ( userId == targetId && targetAlbumId == albumId)
                    return false;
                    else 
                    return true;
               })
               state = updatedState
          })
          builder.addCase(fetchAlbums.fulfilled ,(state, action)=>
          {
               console.log( action.payload );
               state = [...action.payload];
          })
     }
})
export let albumsSliceReducer = albumsSlice.reducer ;