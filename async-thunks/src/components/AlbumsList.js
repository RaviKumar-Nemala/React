import { useSelector } from "react-redux";
import { createAlbumThunk }from '../store/thunks/createAlbum'
import { useDispatch } from "react-redux";
import { fetchAlbums } from "../store/thunks/fetchAlbums";
import { useEffect } from "react";

function AlbumAdder({userId})
{
     let dispatch = useDispatch(); 
     
     let handleClick = ( )=>
     {
          dispatch(createAlbumThunk(userId));
     }
     return (<div>
          <button onClick = {handleClick}>Add Album </button>
     </div>)   
}

export function AlbumsList ({userId})
{ 
     let dispatch = useDispatch();
     console.log( userId );
     let albumsList = useSelector( (state) => {return state.albums});
     
     useEffect(()=>
     {
          dispatch ( fetchAlbums());
     },[dispatch]);

     let albumCreator = <AlbumAdder userId ={userId} />

     let handleAlbumRemoval =  (userId , albumId)=>
     {
          console.log( userId , albumId);
     }
     let myStyles = {display:'flex' , minWidth : '400px' , gap:'30px'};

     let matchedList = albumsList.map((album)=>
     {
          console.log( album );

          let  { albumId , albumName  } = album ;

          if ( album.userId == userId)
          { return (<div style = {myStyles}>
               <span>Album Name = {albumName}</span>
               <span>Album Id = {albumId}</span>
               <button onClick ={()=>handleAlbumRemoval(userId , albumId)} > Remove </button>
           </div>)}
     })
     console.log( matchedList );
     return(<div>
               {albumCreator}
               <div>
                    {matchedList }
               </div>
          </div>);
}