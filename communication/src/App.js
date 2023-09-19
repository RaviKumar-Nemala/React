import  GetQueryData  from "./GetQueryData";
import { useState } from "react";
import { ShowQueryData } from "./ShowQueryData";
import { BooksMainComp } from "./BOOKS/BooksMainComp";
import { Colors_Change_Main } from "./COLORS_CHANGE/Colors_Change_Main";
import { UseEffectMain } from "./USE_EFFECT/UseEffectMain";
import {ImgInit} from './IMAGE_LOAD/Load_Img_Main'
import { MyContext } from "./CONTEXT/MyContext";
//inorder to pass the  data from the parent component to the child component  we use the props

// inorder to pass the data from the child components to the parent components we use the callback functions approach
 
//in this project we are creating the simple  project
// 1 ) create  a search bar  
// 2 ) after user enter  on data display  some hardcoded data on the screen  
// 3 ) get the data in an asynchrounous manner 


function App() {
     let [ data , setData]  = useState( [] ) ;
     let input_change_fun  = async (input_val) => {
          console.log ( input_val) ; 
          let res = await GetQueryData( input_val) ;
         
               setData([...res]);
     }

     let get_data_components = data.map ((obj,index) => 
     {
          return <ShowQueryData key ={index} name = {obj.name} roll = {obj.roll} />
     });

     let error_msg_component = data.length==0 ?<p>Data Not Found</p>:'';

     return (
          // <div>
          // <SearchComponent callback_fun={input_change_fun}/>
          // <div>
          //      { get_data_components}
          // </div>
          // <div>
          //      {error_msg_component}
          // </div>
          // </div>
          // <BooksMainComp />
          // <Colors_Change_Main  />   
          // <ImgInit />
          // <UseEffectMain />
          <MyContext />
     )
}

export default App;
