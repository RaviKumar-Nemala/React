import { useState } from "react";
export function BookDisplayComponent ({book_name, book_img , index , remove_handler , update_handler})
{
     let [ edit_status , setEditStatus] =  useState(false);
     let [new_book_name , setNewBookName] =  useState(book_name);
     console.log( book_name ,book_img)

     let handle_btn = () =>
     { 
          remove_handler(index);
     }
     let handle_edit = ()=>{
          // console.log('called');
          setEditStatus(true);
     }
     let handle_form_submit = (e)=>{
          e.preventDefault();
          setEditStatus(false);
          update_handler( index , new_book_name)
     }
     let book_name_setter = (e)=>
     {
          console.log('hell and heaven');
          setNewBookName(e.target.value);
     }
     let content;
     if ( edit_status == true )
     { 
          content =  <form onSubmit={handle_form_submit}> 
          <input value = {new_book_name} onChange = {book_name_setter}></input>
          <button > save</button>
               </form>
     }
     else
     {
          content = <div> <p> Book Name = {book_name}</p>
          <img src = {book_img} />
          <button  onClick = {handle_btn}>remove</button>
          <button onClick = {handle_edit}>Edit</button>
          </div>
     }

     return (
          <>
               {content}
          </>
     );
}