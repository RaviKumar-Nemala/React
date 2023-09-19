import './Styles.css' 
import  img_val   from './images/ipho_s1.jpg';

export function GetVals ( props )
{    
     console.log ( props );
}
export function  ShowCart( { imageSrc , name , price})
{
     console.log ( imageSrc );
     return (
          <div className = "cart">
             <div className ="imagediv">
             <img src = {img_val} />
             </div>
             <div className ="textdiv">
               <p>Name = {name}</p>
               <p>Price = ${price}</p>
             </div>
          </div>
     )
}