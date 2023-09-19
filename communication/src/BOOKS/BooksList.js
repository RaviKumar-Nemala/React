import { BookDisplayComponent } from "./BookDisplayComponent";
export function BooksList({books , remove_handler , update_handler })
{
          let books_displayer = books.map  ( (curr_book , index) => 
          {
               let  { book_name , book_img } = curr_book;
               console.log ( book_name  , book_img );
               return <BookDisplayComponent book_name = {book_name} book_img = {book_img} index = {index} remove_handler = {remove_handler} update_handler = {update_handler} />
          }
          )

          return  ( 
               <div className="books_displayer">
                    {books_displayer}
               </div>    
          )
}