import { useState , useContext } from "react";
import {booksContext } from "../context/BooksProvider"
import  {BookShow} from "./BookShow"
export function BooksList()
{

     let {books} = useContext(booksContext)
     console.log( books );

     let books_components = books.map ((curr_book)=>
     {
          return <BookShow book_id = {curr_book.id} book_name = {curr_book.name} />
     })

     return (
          <div>
               {books_components}
          </div>
     )
}