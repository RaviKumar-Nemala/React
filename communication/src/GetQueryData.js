
async function get_data ( input_val )
{
     let my_data = [
          {
               name  : 'ravi' ,
               roll   : 1 
          },
          {
               name  : 'kumar' ,
               roll   : 2
          },
          {
               name  : 'ddos' ,
               roll   : 3
          },
          {
               name  : 'cms' ,
               roll   : 4 
          },
     ]

     let get_res  = ()=>  { 
           let res  = my_data.filter((obj) => { 
               let {name} = obj;
               if ( name == input_val )
               {
                    // console.log('matched')
                    return true;
               }
          })
          return res ;
     }

     return new Promise( ( resolve,  reject ) => {
          let res_objs = get_res ();
          resolve( res_objs);
     })
}


function GetQueryData ( input_val  )
{
     return  get_data(input_val);
}
export default GetQueryData;