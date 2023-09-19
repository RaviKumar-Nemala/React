import GetStudent from "./Student";
import {ShowCart} from "./ImagesShow";

function RenderImages ()
{
    const img_paths = [ "./images/ipho_s1.jpg" , "./images/ipho_s2.jpg" ,"./images/ipho_s3.jpg"];
  
    return (
      <div style = { { display : "flex" , gap  : "10px" , backGroundColor:"black" , border : "2px solid black" , justifyContent : "space-between"} }>
      <ShowCart imageSrc = {img_paths[0]} name ="iphone1" price = {40000}  />
      <ShowCart imageSrc = {img_paths[1]}  name ="iphone1" price = {40000} />
      <ShowCart imageSrc = {img_paths[2]} name ="iphone1" price = {40000}  />
      </div>
    )
}
function Util () 
{
  return (
    <div >
      <h1>PROPS SYSTEM </h1>
      <GetStudent student_name = "ravi" roll_no = {1} />
      <GetStudent student_name = "kumar" roll_no = {2} />
    </div>
  );
}


function App() {
  // return ( <Util />)
  return ( <RenderImages />)
}

export default App;
