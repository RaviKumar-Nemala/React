import {useState}  from  'react'

export function SearchComponent ( {callback_fun})
{ 
     // in react  inorder to extact the input value or any text value from the html elements
     // we cannot use  documet.queryselector () approach 
     // instead we use the state management it is more convient  for further validation and also useful for sending info in better way

     let [  val , setVal ]   = useState ( ' ');

     let handleInputChange = (e) =>
     {
          // console.log( e.target.value ) ;
          setVal(e.target.value.trim());
          callback_fun( e.target.value.trim());
     }

     return (
          <form> 
          <input value = {val } onChange = { handleInputChange}/>
          </form>   
     )

}