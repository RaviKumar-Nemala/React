import { useContext } from "react";
import { navContext , NavigationProvider } from "./context/NavigationProvider";
import  {ParaComponent} from "./components/ParaComponent";
import  { ImageComponent } from "./components/ImageComponent";
import  {ButtonComponent} from "./components/ButtonComponent";
import  './App.css'

function Link ({to,my_styles,children})
{
     let {changePath} = useContext(navContext)
     let handleClick = (e)=>{e.preventDefault() ; changePath(to)}
     return <a href = {to} style = {my_styles} onClick = {handleClick}>{children}</a>
}

function LeftSection ()
{
      
     const  links = [ "/images","/button","/para"];
     let {pathname} = useContext(navContext)
     let rendered_items = links.map((curr_link)=>{
          if(curr_link.indexOf(pathname)!= -1)
          {
               return <Link to = {curr_link} my_styles={{borderBottom:'2px solid green'}}>{curr_link.slice(1)}</Link>
          }
          else 
          {
               return <Link to = {curr_link}>{curr_link.slice(1)}</Link>
          }
     })
     return (
          <div className = "left-section">
              {rendered_items}
          </div>
     )
}

export function RightSection()
{
     let {pathname} = useContext(navContext);

     
     if(pathname.indexOf('button') != -1)
     {
          return ( <ButtonComponent />)
     }
     else if ( pathname.indexOf('image') != -1)
     {
          return ( <ImageComponent />)
     }
     else if( pathname.indexOf('para') != -1)
     {
          return ( <ParaComponent />)
     }
     
}
export  function MyBase()
{

     return ( <NavigationProvider>
          <div className = "parent"> 
               <LeftSection />
               <RightSection /> 
          </div>
     </NavigationProvider>)
}