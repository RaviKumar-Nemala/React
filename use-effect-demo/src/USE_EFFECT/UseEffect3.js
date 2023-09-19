import { useEffect  , useState} from "react"

//inside of the useEffect we can't return (strings or numbers  )
//callback of useEffect should not be async function
export function UseEffect3()
{

     return <WithCleanUp />

     let [count , setCount]  = useState(0)
      useEffect(()=>
     {
          
          let clean_up = ()=>{console.log('clean up ' , count )}
          
          return clean_up;
     
     } )
     
     return (<div onClick = {()=>{setCount(count+1)}}>Hell and Heaven </div>)
}

//when ever we are using the event handler we use clean up functions to prevent that event being called multiple times
function WithOutCleanUp ()
{
     let [count , setCount] = useState(0);

     let listener = () => {console.log(count)}
     useEffect(()=>
     {
          document.body.addEventListener('click',listener)
     })

     return (
          <div onClick = {()=>setCount(count+1)} >Click</div>
     )
}

//when ever we are using the event handler we use clean up functions to prevent that event being called multiple times
function WithCleanUp ()
{
     let [count , setCount] = useState(0);

     let listener = () => {console.log(count)}
     useEffect(()=>
     {
          document.body.addEventListener('click',listener)

          let clean_listener = ()=>
          {
               document.body.removeEventListener('click',listener);
          }

          return clean_listener;
     })

     return (
          <div onClick = {()=>setCount(count+1)} >Click</div>
     )
}

