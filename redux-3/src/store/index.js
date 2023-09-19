import { configureStore } from "@reduxjs/toolkit";
import { addCar , removeCar , carsReducer}  from './CarsSlice'

let carsStore = configureStore( {
     reducer : {
          cars : carsReducer 
     }
})

export{ carsStore, addCar ,removeCar }