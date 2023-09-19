import { useState } from "react";

function ShowImage ( {img_data})
{
     let img_src ;
     if( img_data.length == 0 )
          img_src = '';
     else 
          img_src = <img src = {img_data} style = { {height:'140px' , objectFit : 'contain'}}/>

     return (
     <div>
          {img_src}
     </div>
     );
}

function LoadMainImg ({img_src})
{
     return(
          <ShowImage img_data = {img_src} />
     )
}

export function ImgInit()
{
     let [img_src , setImageSrc ] =  useState('')
     let on_change_handler=  async (e)=>
     {
          let file = e.target.files[0];
          
          let file_reader = new FileReader();

          file_reader.readAsDataURL(file);
          
          file_reader.onload = ()=>
          {
               // console.log( file_reader.result);

               setImageSrc(file_reader.result)
               
          }

     }

     return (
          <div>
          <input type ="file" onChange = {on_change_handler}/>
          <LoadMainImg img_src = {img_src} />
          </div>
     );
}