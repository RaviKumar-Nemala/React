import { useState} from 'react';

export  function ExpandedPanel( { children ,header } )
{
     let [expandedStatus , setExpanded ] = useState(false);
     let content;
     if( expandedStatus )
     {
          content = 'Hide Albums'
     }
     else
     { content  = 'Show Albums'}

     return (
          <div>
          <div>{header}</div>
          <span>
               <button onClick = {()=>{setExpanded(!expandedStatus)}} > {content} </button>
          </span>
          {expandedStatus && children}
          </div>
     )
}