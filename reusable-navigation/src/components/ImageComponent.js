import  { useState} from "react";
import  firstImage from '../images/AP1_IMG.jpg';
import secondImage from '../images/AP1_S1.jpg';
import thirdImage  from  '../images/AP1_S2.jpg';

export  function ImageComponent ()
{
     return ( <div class = "comp-show"> 
          <img  src = {firstImage} />
          <img src = {secondImage} />
          <img src ={thirdImage} />
     </div>)

}