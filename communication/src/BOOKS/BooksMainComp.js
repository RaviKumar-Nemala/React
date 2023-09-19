import { useState } from "react";
import { BooksSearchBar } from "./BooksSearchBar";
import { BooksList } from "./BooksList";
export function BooksMainComp()
{
     let [ books , setBook ] = useState( [] ) ;

     let books_receiver = (obj)=>
     {
          console.log( obj ) ;
          setBook([...books ,obj]) ;
     }

     let book_remove_hanlder  = ( index )=>
     { 
          console.log ( index );
          books.splice(index,1);
          setBook([...books]);
     }
     //here we use the index is the key to update its value
     let book_update_handler = (index , book_name)=>
     { 
          books[index].book_name =  book_name;
          setBook([...books]);
     }
     return (
     <div >
          <BooksSearchBar callback={books_receiver}/>  
          <BooksList books = { books } remove_handler = {book_remove_hanlder} update_handler={book_update_handler}/>
     </div>
     )
}