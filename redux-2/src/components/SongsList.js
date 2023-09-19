import{ useDispatch  , useSelector} from 'react-redux';
import{ addSong , removeSong } from '../store/index';
import { get_random_str } from './Util';

function  SongsData( {songs , removeHandler } )
{
     if ( !songs || songs.length == 0)
     {
          return <></>
     }
     let rendered_vals  = songs.map((curr_song)=>{
          return <li>
               <p>{curr_song}</p>
               <button onClick= {()=>{removeHandler(curr_song)}}> remove </button>
               </li>
     })

     return ( <ul className = "movies-list">{rendered_vals}</ul> )
}

export function  SongsList ()
{
     let val = get_random_str();

     let  dispatch = useDispatch();

     let songsList =  useSelector( (state) => 
     {
          return state.songs;
     })

     let handleSongAdd = ()=>
     {
          let song_name = get_random_str();
          dispatch(addSong( song_name)) ;
     }
     let handleSongRemove = (song_name)=>
     { 
          console.log( 'removing  the song  = ' , song_name);
          dispatch( removeSong(song_name))
     }
     return (
          <div className ="movies-container"> 
               <div className = "movies-header">
                    <span >SongsList</span>
                    <span><button onClick = {handleSongAdd}>Add Song</button></span>
               </div>
               <div>
                    <SongsData songs  = {songsList} removeHandler = {handleSongRemove}/>
               </div>
          </div> )
}
