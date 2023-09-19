
export  function ShowQueryData( { name , roll , key_val }) 
{
     return ( 
          <div key = {key_val}> 
               <p>{name}</p>
               <p>{roll}</p>
          </div>
     );
}