import {useState } from "react" ;
import  ReactDOM from "react-dom";
function PopUp ({exitHandler})
{
     return ReactDOM.createPortal(
          <div>
               <div onClick = {exitHandler }  style = {{position:'absolute', inset : '0', opacity : '80%' , backgroundColor:'grey'}}>
               </div>
               <div style = {{position:'absolute', inset:'40', padding : '30px',display:'flex',flexDirection:'column',gap : '50px'}}>
                    <p>BLURR ACTIVATED</p>
                    <button onClick = { exitHandler}> EXIT </button>
               </div>
          </div>
     ,  document.querySelector('.model-container'))
}

function LeftSection({click_callback})
{
     return ( <div onClick={click_callback}>Para</div>)
}
function RightSection ( {show_status})
{

     let [popupStatus , setPopStatus] = useState( false );

     let handle_click = ()=>{ setPopStatus( true )}

     let close_popup = ()=> { console.log('called');setPopStatus (false )}

     let popUpDiv = <PopUp exitHandler={close_popup}/>
     let content ;
     if( show_status )
     {    
          content = <div>
                         <div>Paragraph Div</div>
                         <button onClick = {handle_click}>Click Me </button>
                    </div>;
     }
     else 
     {
          content = '';
     }
     return ( 
          <div>
               {content}
               {popupStatus && popUpDiv}
          </div>
     )
}

export function MyBase ()
{
     let [display_status , setDisplayStatus ] = useState(false );

     let  sidebar_click = ()=>{setDisplayStatus(!display_status);};

     return(<div style={{display:'flex' , gap : '50px' , fontSize : '20px'}}>
          <LeftSection click_callback = {sidebar_click}/>
          <RightSection show_status={display_status}/>
     </div>)

}