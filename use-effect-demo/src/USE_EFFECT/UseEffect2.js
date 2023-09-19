import { useContext } from "react";
import { MyContext } from "./MyProvider";
import { useEffect } from "react";

export function UseEffect2()
{
let {change_state} = useContext(MyContext);

//leads to the infinite loop 
// when ever the app component  in the provider
// component renders change_State function will get the different memory block 
// when there is a change in the memory block of change_State our effect function will be re executed again 
// this results in calling the parent-child and child-parent in infinite times

useEffect( ()=>{
     change_state();
 } ,  [change_state]);


}