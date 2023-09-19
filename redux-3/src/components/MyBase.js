import {useDispatch , useSelector} from "react-redux";
import { useState} from 'react' 
import { addCar , removeCar } from '../store/index';
import  Car from './car.js';
import { CarsAddComp}  from './CarsAddComp';
import  { CarsDisplayComp}  from './CarsDisplayComp'
import  {CarsSearchComp}  from './CarsSearchComp';
import  {TotalDisplayer} from './TotalPrice';

import '../App.css';

export  function MyBase ()
{
     let  [ carName , setCarName]   = useState('');
     
     let [ searchValue , setSearchValue]  = useState('');

     let dispatch  = useDispatch();

     let carsList = useSelector ((state) =>
     {
          return state.cars;
     })

     let handleCarAdd  = ( car  )=>
     {
          console.log( car );
          dispatch( addCar( car ) ) ;
     }

     let handleDataSubmit = ( name, price)=>
     {
          let obj =  new Car( name , price ) ;
          setCarName('');
          handleCarAdd( obj );
     }

     let handleCarRemove =  (car)=>
     { 
          dispatch ( removeCar ( car ) ) ;
     }

     //holds the indexes of the cars which has to make bold
     let handleCarNameChange = ( value )=>
     { 
          console.log( value);
          setCarName( value ) ;    
     }

     let handleCarSearch  =  (value)=>
     { 
          setSearchValue(  value ) ;
     }

     let boldStyles =  carsList.map((car , index)=>
          {
               if ( carName.length != 0 && car.getCarName().indexOf(carName) != -1)
               { 
                    return index;
               }
               else 
                    return -1;
              
          })
     // let modified_list = carsList;
     if ( searchValue.length != 0 )
     { 
          carsList =  carsList.filter(( car) =>
          {
               if ( car.getCarName().indexOf( searchValue) != -1 )
               {
                     return true;
               }
               return false;
          })
     }

     console.log ( carsList );

     let totalPrice = 0;

     if( carsList.length  != 0 )
     {
          carsList.forEach(( car ) =>
          {
               totalPrice +=  Number.parseFloat(car.getPrice());
          })
     }

     return (
          <div className =  "cars-container">
               <CarsAddComp  handleCarNameChange = {handleCarNameChange}  handleDataSubmit = {handleDataSubmit} carName = {carName}/>
               <CarsSearchComp handleCarSearch = {handleCarSearch}/>
               <CarsDisplayComp boldStyles = {boldStyles}  carsList = {carsList} handleCarRemove = {handleCarRemove} />
               <TotalDisplayer totalPrice = {totalPrice}/>
          </div>
     )
}