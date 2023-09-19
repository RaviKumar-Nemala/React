import { useState , useEffect }  from "react";
import { Table }from "./Table";

export function TablePage()
{
     let default_data = [ 
          {
               name : 'Ravi' ,
               color : 'blue', 
               age :  19
           },
           {
               name : 'Kumar' ,
               color : 'black', 
               age :  20
           },
           {
               name : 'Ddos' ,
               color : 'green', 
               age :  17
           },

    ]   
    

    let [ data ,  setData] =  useState( default_data);

    function sortName( sort_status )
    {
        // true means ascending order 
         if ( sort_status  == true )
        {
            data.sort ( (a, b ) => { return ( a.name.localeCompare(b.name) ) ; }  );
            setData( [...data] );
        }   
        // false means decending order
        else
        { 
            data.sort (( a,b ) => { return ( b.name.localeCompare(a.name) ) } ) ;
            setData( [...data] );
        }
    }

    function sortAge  ( sort_status  )
    {
         if ( sort_status )
        {
            data.sort( ( a, b ) =>  a.age - b.age ) ;
            setData( [...data] );
        }
        else
        {
           data.sort( (a,b) =>  b.age - a.age )  ;
           setData( [...data] );
        }
    }

    let column_config = [
        {label : 'Name' , render: ( curr_obj ) =>{ return ( 
        <th>
        <div className="column-wrapper">
            <div className="buttons-wrapper">
                <button onClick = {() => { sortName (true)}}>asc</button>
                <button onClick = {() => { sortName( false) } }>dsc</button>
            </div>
            <div>
                {curr_obj.label}
            </div>
        </div>
        </th>
        )
        }
    },

        {label : 'Color', render: ( curr_obj ) =>curr_obj.label},

        {
        label : 'Age'  , render: ( curr_obj ) =>{ return ( 
            <th>
            <div className="column-wrapper">
                <div className ="buttons-wrapper">
                    <button onClick = {() => { sortAge(true) }}>asc</button>
                    <button onClick = {() => { sortAge( false) } }>dsc</button>
                </div>
                <div>
                    {curr_obj.label}
                </div>
            </div>
            </th>
        )
        }    
    },
        
    ]
     let row_config  =  [ 
        
        { label : 'Name' , render : (curr_obj) => ( curr_obj.name) } ,
        { label : 'Color' ,render :  ( curr_obj) =>  <div style = {{ height : '50px',  width : '50px' , backgroundColor: `${curr_obj.color}`}}></div> },
        { label : 'Age' , render  : ( curr_obj) => curr_obj.age}

        ]
    
     return ( <Table data  = { data}  column_config= { column_config } row_config =  {row_config} />) ;

}