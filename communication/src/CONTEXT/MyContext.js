import { createContext, useContext } from "react";
// import { ContextUser } from "./ContextUser";
import { useState } from "react";

export let dataContext  = createContext();

function  ContextUser()
{
     let data =  useContext(dataContext);
     
     console.log( data.count , data.change_val );

     // data.change_val(data.count + 1 )
     
     let handle_click = ( )=>{
          data.change_val(data.count +1 );
     }
     return (<div onClick = {handle_click}>Checking</div>)
}

export function MyContext()
{
     // now the context user component is access the value 5
     // there is no need to pass the props 
     //here the value may be anything like an object or  array or a string 

     let [count ,setCount] = useState(1);

     let valueToShare = {
          count  , 
          change_val : (value)=>
          {
               setCount(value);
          }
     }

     return(
          // <dataContext.Provider value = {5} >
          <dataContext.Provider value= {valueToShare}>
               <ContextUser />
          </dataContext.Provider>
     )

}