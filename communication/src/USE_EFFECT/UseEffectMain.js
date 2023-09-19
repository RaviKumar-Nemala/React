import {useEffect} from 'react'
import { useState } from 'react';

export function UseEffectMain()
{
     let [count , setCount ] =  useState(1);

     let handle_click = ()=> {
          console.log('clicked')
          setCount( count + 1 );
     }
     
     //only called when the component is loaded at first
     useEffect(()=>
     {
          console.log('use effect 1')
     } , []) ;

     //when ever the count value is modified
     // then app reloaded then this function is executed again
     useEffect(()=>
     { 
          console.log('use effect  2 ')
     } , [count])

     //called every time when the component is reloaded
     useEffect(()=>
     { 
          console.log('use effect 3')
     })
     return ( <div onClick = {handle_click}>
          Checking
     </div>);
}