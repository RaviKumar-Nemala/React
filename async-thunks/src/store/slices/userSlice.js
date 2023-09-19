import {createSlice } from '@reduxjs/toolkit';
import { fetchUserThunk } from '../thunks/fetchUser';
import { createUserThunk } from '../thunks/createUser'
import { userRemoveThunk } from '../thunks/deleteUser';

let userSlice = createSlice({
     name : 'users',
     initialState : {
          isLoading : true,
          data : [] ,
          error :  false
     },
     extraReducers ( builder)
     {
          builder.addCase( fetchUserThunk.pending , (state, action)=>
          {
               console.log( action);
               state.isLoading = true ; 
          })

          builder.addCase(fetchUserThunk.fulfilled , (state , action)=>
           {
               state.isLoading =  false ;
               console.log( action.payload )
               state.data = action.payload;
               console.log( state.data );
           })
          builder.addCase ( fetchUserThunk.rejected , (state, action)=>
          {
               state.isLoading = true ;
               state.error = true;
          })

          builder.addCase( createUserThunk.pending , ( state , action ) =>
          {
               state.isLoading = true; 
          })
          builder.addCase(createUserThunk.fulfilled , (state,action)=>
          {
               state.isLoading = false;
               state.data.push(action.payload);
          })
          builder.addCase( createUserThunk.rejected , (state, action )=>
          { 
               state.isLoading = false ;
               state.error = true;
          })

          builder.addCase( userRemoveThunk.pending , ( state , action ) =>
          {
               state.isLoading = true; 
          })
          builder.addCase(userRemoveThunk.fulfilled , (state,action)=>
          {
               state.isLoading = false;
               let targetId = action.payload.id ;
               let updatedData = state.data.filter(( currUser) =>
               {
                    return currUser.id != targetId;
               })
               state.data = updatedData;
          })
          builder.addCase( userRemoveThunk.rejected , (state, action )=>
          { 
               state.isLoading = false ;
               state.error = true;
          })

     }
});

export let  userSliceReducer  = userSlice.reducer;