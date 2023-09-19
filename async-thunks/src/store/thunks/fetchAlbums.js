import { createAsyncThunk } from "@reduxjs/toolkit";
import { send_request } from "../utils/requestUtil";
const ALBUMS_FETCH_URL = 'http://localhost:2024/getAlbums'

export let fetchAlbums = createAsyncThunk( 'albums/fetch' , async()=>
{
     let response = await send_request( ALBUMS_FETCH_URL , 'GET');
     let data = await response.json();
     console.log( data)
     return data;
})