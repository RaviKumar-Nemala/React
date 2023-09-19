import { useState } from "react";

function GetColorComp({css_styles,change_color})
{    
     return (
          <div>
          <div  style ={css_styles} ></div>
          <button onClick = {change_color} style = { {color:'black',fontSize :'18px'}}>Change Color</button>
          </div>
     )
}
export function Colors_Change_Main()
{    
     let colors  = [ 'blue' , 'black' ,'red','yellow'];

     let common_styles =  { height : '50px', 
     width :'50px'};
     let [my_styles ,setStyles] =useState({ 
          ...common_styles ,backgroundColor:'blue'
     });
     let change_color =()=>{
          console.log('change buton has clicked');
          let random_color = colors[Math.floor(Math.random()*colors.length)];
          setStyles({...my_styles,backgroundColor:random_color})
     }
     return (
          <GetColorComp  css_styles={my_styles} change_color = {change_color}/>
     )
}