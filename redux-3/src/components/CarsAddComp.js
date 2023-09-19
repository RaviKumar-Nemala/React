import { useState }  from 'react'

export function  CarsAddComp({handleCarNameChange,handleDataSubmit,carName})
{
     let [carPrice,setCarPrice] = useState('');

     return(
          <div className="cars-adder">
               <div>
                    CarName: <input  value = {carName} onChange = {(e)=>{handleCarNameChange(e.target.value)}}/>
               </div>
               <div>
                    Price: <input value = {carPrice} onChange = {(e)=>setCarPrice(e.target.value)} />
               </div>
               <div>
                    <button onClick ={()=>{setCarPrice('') ;handleDataSubmit(carName,carPrice)}}>submit</button>
               </div>
          </div>
     )

}