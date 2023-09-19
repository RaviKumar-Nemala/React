import { createAsyncThunk } from "@reduxjs/toolkit";
import { send_request } from '../utils/requestUtil'

const ALBUM_CREATE_URL = 'http://localhost:2024/addAlbum'

export  let createAlbumThunk = createAsyncThunk( 'albums/create' ,async(userId)=>
{
     let obj=
     {
          userId
     };
     let response  = await  send_request( ALBUM_CREATE_URL , 'POST' , obj );

     if( response.ok)
     {
          let jsonData = await response.json();
          console.log( jsonData );
          return jsonData;
     }
     else
     { 
          throw new Error ('errow while creating the album');
     }
})