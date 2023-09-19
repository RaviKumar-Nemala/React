import {useState }  from "react" 
import  { Child}  from './Child'

//requirement
// whenever the user clicked on the outside of options div
// if the options div has opened then it has to closed automatically
export default  function Parent()
{

     let [ selected ,   handleSelect ]   = useState ( null)

     let handleChange = (option )=>
     {
          let color_name  = option.colorName;
          handleSelect ( color_name );
     }
     

     let options = [ { colorName : 'red' , id  :1  },
                      { colorName : 'blue' , id  :2  },
                     {colorName : 'green' , id :3 } ] 


     return ( <Child  value = {selected}  onChange = {handleChange}  options = {options}/> )

}