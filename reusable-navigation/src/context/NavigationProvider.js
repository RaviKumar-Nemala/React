import  { useState , useEffect , createContext } from "react"

export let navContext =  createContext();

export function NavigationProvider({children})
{
     let [ pathname, setPathName] =  useState ( window.location.pathname);

     let changePath  = ( new_path)=>
     {
          console.log( new_path);
          // set the search value without refreshing the page
          window.history.pushState({} , '', new_path);
          setPathName ( new_path);
     }

     //capture the forward and backward button and changes the pathname  accodingly
     useEffect( ()=>{
          
          let handler = ()=>
          {
               setPathName( window.location.pathname);
          }
          let clean_up  = ()=> { window.removeEventListener('popstate',handler)};

          window.addEventListener('popstate' , handler)
          
          return clean_up;
     } , [])

     let valueToShare  = { changePath , pathname  };
     return( <navContext.Provider  value  = { valueToShare}>{children}</navContext.Provider>)
}