import { createSlice } from '@reduxjs/toolkit'

let carsSlice =  createSlice(
     {
          name  :'cars',
          initialState : [], 
          reducers : 
          {
               addCar(state , action)
               {
                    console.log( action.payload) 
                    state.push( action.payload)
               },
               removeCar( state , action)
               {
                    const idx = state.indexOf(action.payload);
                    state.splice(idx ,1 );
                    
               }
          }
     }
)

export  const { addCar , removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
