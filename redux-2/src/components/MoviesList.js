import { useDispatch ,  useSelector }  from "react-redux";
import { addMovie , removeMovie } from "../store/index";
import { get_random_str } from "./Util";
import '../App.css'
import { useEffect } from "react";

function  MoviesData({movies , removeHandler })
{
     if ( !movies || movies.length == 0)
     {
          return <></>
     }
     let rendered_vals  = movies.map((curr_movie)=>{
          return <li>
               <p>{curr_movie}</p>
               <button onClick= {()=>{removeHandler(curr_movie)}}> remove </button>
               </li>
     })

     return ( <ul className = "movies-list">{rendered_vals}</ul>)

}

export  function MoviesList()
{    
     let val = get_random_str();

     let  dispatch = useDispatch();
 
     let moviesList =  useSelector( (state) => 
     { 
          return state.movies;
     })

     let handleMoveAdd = ()=>
     {
          let movie_name = get_random_str();
          dispatch(addMovie( movie_name)) ;
     }
     let handleMovieRemove = (movie_name)=>
     { 
          console.log( 'removing  the movie = ' , movie_name);
          dispatch( removeMovie(movie_name))
     }
     return (
          <div className ="movies-container"> 
               <div className = "movies-header">
                    <span >MoviesList</span>
                    <span><button onClick = {handleMoveAdd}>Add Movie</button></span>
               </div>
               <div>
                    <MoviesData movies = {moviesList} removeHandler = {handleMovieRemove}/>
               </div>
          </div> )
}