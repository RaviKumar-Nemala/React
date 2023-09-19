import { createAsyncThunk } from "@reduxjs/toolkit";
import { send_request } from "../utils/requestUtil";

const ALBUM_REMOVAL_URL  = 'http://localhost:2024/removeAlbum';

export let deleteAlbumThunk = createAsyncThunk( 'albums/delete' ,async(userId ,albumId)=>{ 
     
     let obj = { userId , albumId }
     
     let response = await send_request( ALBUM_REMOVAL_URL, 'DELETE' , obj);

     return obj;

})