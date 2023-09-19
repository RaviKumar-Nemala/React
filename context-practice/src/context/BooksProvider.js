import { createContext ,useState } from "react";

export let booksContext = createContext()

export  function Provider( {children})
{
     console.log( children );

     let [books , setBooks] = useState([]);

     let add_book = (new_book)=>
     {
          setBooks( [ ...books , new_book]);
     }
     let update_book = ( old_id , new_book)=>
     { 
          console.log( new_book)
          let updated_books = books.map ( (curr_book) =>
          {
               if ( curr_book.id == old_id)
               {
                    curr_book.id = new_book.id;
                    curr_book.name = new_book.name;
               }
               return curr_book;
          })
          setBooks( [...updated_books]);
     }
     let delete_book = ( book_id)=>
     {
          let remaining_books = books.filter( (curr_book) =>
          { 
               return curr_book.id != book_id;
          })
          setBooks([...remaining_books])
     }

     let valueToShare =  {
          books ,
          add_book,
          update_book,
          delete_book
     };

     return(
          <booksContext.Provider value = {valueToShare}>
               {children}
          </booksContext.Provider >
     )
}