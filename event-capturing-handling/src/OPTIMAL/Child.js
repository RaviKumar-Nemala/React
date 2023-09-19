import {useState,useRef, useEffect }  from  'react'

export  const DEFAULT_OPTIION  = 'SELECT  OPTION';

export function Child ( { value , onChange , options})
{
     console.log ( options );

     let [ isOpen , setOpen  ]  = useState ( false );

     let options_div =  useRef();
     
     //parent_ref contains an property called as the current which holds the actual value of the html element

     useEffect(()=>
     {    
          //add and clck event on the document
          // if the event.target is not part of the  options div then close the options div
          let handle = (e)=>
          {
               let curr_target  = e.target;
               
               if( options_div.current.contains( curr_target))
               {
                    console.log('clicked inside of the options div')
               }
               // if the click event happens outside of the options div 
               // then close the options div
               else
               {
                    console.log ( 'clicked outside of the options div');
                    setOpen ( false );
               }
          }

          let cleanup =  ()=>{window.removeEventListener( 'click' ,  handle)}

          document.addEventListener('click' , handle);

          //have to remove the event listerners otherwise same listener is called by multiple times
          
          return cleanup;

     } , [])

     let handleClick = ()=>{setOpen ( !isOpen );};

     let handleColorClick =  (curr_option ) =>{  setOpen ( false ) ; onChange ( curr_option)}
     let rendered_vals = options.map ( (curr_option) => { 

               if ( isOpen == true)
               {
                    return ( <div style = { { padding : '10px' , fontSize : '19px' , textTransform :'capitalize' , cursor:'pointer' , width : '100px'}} onClick = {()=> handleColorClick(curr_option)}>
                                   {curr_option.colorName}
                              </div>
                         )
               }
     } )  
     let selected_value = '';
     if( value == null )
     {
           selected_value = DEFAULT_OPTIION ;
     }
     else
     { 
          selected_value =  value
     }
     return (
               // parent_ref value holds the current html reference  
          <div ref  ={options_div}>
               <div style = {{cursor:'pointer', height  :  'auto' , width : '200px' , border :'2px solid black'} } onClick = { () => handleClick()}>
                    {selected_value}  
               </div>
               <div>
                    { rendered_vals}
               </div>
          </div>
     )
}


