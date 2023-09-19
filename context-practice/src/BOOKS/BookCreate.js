import { useState , useContext } from "react"
import { booksContext } from "../context/BooksProvider";

export function BookCreate ()
{
     let def_data = 
     {
          id  : 0 , 
          name : ''
     };

     let [curr_data , setData]  =   useState(def_data);

     let {add_book}  =  useContext(booksContext)
     
     let handle_submit = (e)=>
     {
          e.preventDefault();
          add_book(curr_data);
     }
     let handle_id_change = (e)=>
     {    
          curr_data.id = e.target.value;     
          setData({...curr_data});

     }
     let handle_name_change = (e)=>
     { 
          curr_data.name = e.target.value;
          setData({...curr_data});
     }
     return(
          <div>
               <form onSubmit = {handle_submit}>
                    Name:<input type ="text" onChange = {handle_name_change} value  = {curr_data.name} />
                    Id:<input type = "text" onChange={handle_id_change} value =  {curr_data.id}/>
                    <button>Save</button>
               </form>
          </div>
     )

}