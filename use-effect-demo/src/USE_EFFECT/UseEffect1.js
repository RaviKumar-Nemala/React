import { useEffect } from "react";
import { useState } from "react";



export function UseEffect1()
{
     let [count , setCount ] = useState(0);

     //counter value does not change inside of the useEffect
     // because use effect only executed at once 
     // during the first render of the app
     useEffect(()=> 
     {
          document.body.onclick = () => { console.log("inside useEffect " ,count)}
     },[]);

     return (
          <div>
              <button onClick = {()=>{
               console.log("inside button " , count) 
                setCount(count+1)} 
                }>Click Me</button> 
          </div>
     )
}
