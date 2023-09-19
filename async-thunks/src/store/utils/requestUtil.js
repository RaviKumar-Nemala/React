export let send_request = async ( url , methodType , params = null)=>
{
     let options = { method: methodType , headers : { 'Content-type': 'application/json'}}

     if ( methodType === 'GET' )
     { 
          if( params != null)
          {
               options.body =  new URLSearchParams(params).toString();
          }
     }
     else if ( methodType === 'POST' || methodType == 'DELETE')
     {
          // console.log( params );
           if ( params != null)
           {
               options.body =  JSON.stringify( params );
           }
           console.log( options.body)
     }
     console.log( options );
     let response  = await  fetch ( url ,  options );
     return response ;
}