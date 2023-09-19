
//making the sample version of reusable button 
//By the time if we use the tailwind we will use more
export function Button ({primary , secondary , ...rest})
{
     console.log( primary ,  secondary , rest ) ;

     if( primary && secondary )
     { 
          throw new Error('Cannot set Two colors');
     }
     //let primary = blue color and secondary = black; 
     //setting the default text color ;

     // ..rest is used for different event handler functions that are used for this button
     let my_styles = {color:'red'} ;
     if( primary )
     { 
          my_styles.backgroundColor = primary;
     }
     if( secondary )
     {
          my_styles.backGroundColor= secondary;
     }

     return (
          <button {...rest} style = {my_styles} >Click Me </button>
     )
}