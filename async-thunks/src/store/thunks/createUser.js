import { createAsyncThunk } from "@reduxjs/toolkit";
import { send_request } from "../utils/requestUtil";
const  ADD_USER_URL = 'http://localhost:2024/addUser'

let createUserThunk = createAsyncThunk('users/add' , async ()=>
{
     console.log( 'adding the user ')
     let response = await  send_request( ADD_USER_URL ,'POST');
     console.log( response );

     if ( response.ok)
     {
          return await response.json();
     }
     else 
     {
          throw new Error("error while creating user ");
     }
}
)

export { createUserThunk };