import { useContext } from "react";

import { dataContext } from "./MyContext";

export function  ContextUser()
{
     let data =  useContext(dataContext);
     
     console.log( data.count , data.change_val );

     // data.change_val(data.count + 1 )
     
     let handle_click = ( )=>{
          data.change_val(data.count +1 );
     }
     return (<div onClick = {handle_click}>Checking</div>)
}