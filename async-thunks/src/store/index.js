import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./slices/userSlice";
import { albumsSliceReducer } from './slices/albumsSlice';

let store  = configureStore( {
     reducer : { 
          users : userSliceReducer,
          albums :albumsSliceReducer
     }
});

export { store };

export * from './thunks/fetchUser';
