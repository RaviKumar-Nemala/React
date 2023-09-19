import { createAsyncThunk } from "@reduxjs/toolkit";
import { send_request } from "../utils/requestUtil";
const USER_DELETE_URL = 'http://localhost:2024/removeUser'

export  let  userRemoveThunk = createAsyncThunk( 'users/delete',async( user) =>
{
     // console.log( 'deleting the user = ' , user );
     // console.log( user)
     let obj  =
     {
           id  : user.id ,
           name  : user.name
     }
     console.log( obj )
     let response = await send_request( USER_DELETE_URL , 'DELETE', obj );
     if ( response.ok)
     {
          return user;
     }
     else 
     {
          throw new Error('error encountered while  removing the user ');
     }
} )
