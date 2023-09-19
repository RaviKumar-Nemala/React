import { useState } from "react"
import  './Books.css'
import first_img   from '../images/ipho_s1.jpg'
import second_img  from '../images/ipho_s2.jpg' 
import third_img   from '../images/ipho_s3.jpg'

const ACCEPTED_FILE_FORMATS = [ "image/jpeg" , "image/jpg", "text/plain"]

function is_valid_file_format ( file_type)
{
     file_type = file_type.trim();
     let res = false;
     ACCEPTED_FILE_FORMATS.forEach ( (curr_format)=>
     { 
          console.log( curr_format  , file_type );
          if(curr_format.match(file_type) )
           res =  true;
     } )
     return res;
}

function GetImgComponent( { file })
{
     let file_reader = new FileReader();
     file_reader.readAsDataURL( file ) ;

     return file_reader.addEventListener('load' , (e) =>
     {
          // console.log( file_reader.result );
          return <img src =  {file_reader.result } />
     })
}



export function BooksSearchBar({callback} )
{

     let [book_name , setName ] = useState('')

     const images =  [ first_img , second_img , third_img  ];
     
     let get_random_img = () => { return images[Math.floor( Math.random() * images.length)]}
     
     let submitHandler = (e)=>
     {
          e.preventDefault();
          let res = 
          {
               book_name : book_name,
               book_img : get_random_img()
          }
          callback( res );
     }
     
     let get_name = (e) => 
     {
          console.log( e.target.value);
          setName( e.target.value ) ; 
     }
    
     return(
          <div className = "books_div">   
          <form onSubmit = {submitHandler}>
               <input placeholder = "Book Name "  type = "text" calssName = "book_name" value = {book_name} onChange = {get_name}/>
               <button onClick = {submitHandler}>Add</button>
          </form>
          </div>
     )
}