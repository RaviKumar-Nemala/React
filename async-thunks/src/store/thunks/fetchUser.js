import { createAsyncThunk } from "@reduxjs/toolkit";
import { send_request } from "../utils/requestUtil";

const USER_FETCH_URL  = 'http://localhost:2024/usersList';

export  let fetchUserThunk = createAsyncThunk( 'users/fetch' , async()=>
{
     let response  =  await send_request(  USER_FETCH_URL , 'GET' );

     let json_data = await response.json() ;

     return json_data;
})