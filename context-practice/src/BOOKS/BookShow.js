import { useContext ,useState} from "react"
import { booksContext } from "../context/BooksProvider"

function GetEditComp({book_id, book_name , call_back})
{
     let [bname , setName ] = useState(book_name);
     let [bid , setId] = useState(book_id);
     let handle_name_change = (e)=>
     {
          setName(e.target.value);
     }
     let handle_id_change = (e)=>{
          setId(e.target.value);
     }
     let handleSubmit = (e)=>
     {
          e.preventDefault();
          let book = { name:bname , id:bid }
          call_back(book_id , book);
     }
        return ( <div>
          <form onSubmit={handleSubmit}>
          id:<input type ="text" value = {bid} onChange={handle_id_change}/>
          name : <input type = "text" value = {bname} onChange = {handle_name_change}/>
          <button>save</button>
          </form>
          </div>
        );
}

export function BookShow( {book_id , book_name})
{
     let [update_status , setUpdate] = useState(false);

     let {delete_book , update_book} =  useContext(booksContext);

     let handle_edit = ()=>
     {
          setUpdate(!update_status)
     }
     let handle_remove = ()=>
     {
          console.log( book_id );
          delete_book(book_id);
     };
     let close_edit_form = (old_book_id,  new_book)=>
     {
          // console.log( book_name  , book_id );

          update_book(old_book_id , new_book);
          setUpdate(!update_status)
     }
     let content  ; 
     if( update_status )
     { 
          console.log('reached')
          // alert('update btn')
          content = <GetEditComp book_id={book_id} book_name={book_name} call_back = {close_edit_form} />
     }
     else 
     {
          content = <>
          <div>
               <p>BookName  = {book_name}</p>
               <p>BookId = {book_id}</p>
          </div>
          <div>
               <button onClick = {handle_remove}>Remove</button>
               <button onClick = {handle_edit}>Update</button>
          </div>
          </> 

     }
     return (
          <div>
              {content}
          </div>
     )
}
