import { createContext ,useState } from "react"

export  let MyContext = createContext()

export function MyProvider({children})
{
     let [ counter , setCount ] = useState(0);

     let change_state =  () =>
     {
          console.log( counter);
          setCount ( counter + 1 ) ;
     }
     
     let valueToShare = {
          change_state,
     }
     return(
          <MyContext.Provider value = {valueToShare} >
               {children}
          </MyContext.Provider>
     )
}