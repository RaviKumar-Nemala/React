import  './App.css'

export function Table ({ data, column_config , row_config })
{
     let rendered_headers = column_config.map ( (curr_config ) => { return curr_config.render(curr_config)} ) ; 
     
     let rendered_rows  = data.map( (curr_data) => {

               let curr_row  =  row_config.map  ( (curr_row_config) =>
               {
                    return ( <td >{ curr_row_config.render(curr_data)}</td>)
               }) 
               
               return ( <tr>{curr_row}</tr>)
     })

     return ( 
          <div className = "table-container">
               <table>
                    <thead>
                         <tr>
                              {rendered_headers}
                         </tr> 
                    </thead>
                    <tbody>
                         {rendered_rows}
                    </tbody>
               </table>
          </div>

          
     )
}