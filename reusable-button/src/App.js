import { Button } from "./Button";

function UseButton2()
{
  let handle_click = ()=>
{
  console.log ('Use Button 2');
}
try{
  return (<div >
    <Button onClick = {handle_click} primary='blue' />
    </div>)
}
catch ( err )
{
  return (<div>Error Encountered</div>)
}
}


function UseButton1(){

  let handle_click =()=>
  {
    console.log ('Use Button 1');
  }
  return (<div >
    <Button onClick = {handle_click} primary='black' />
    </div>)
}

function App() {
  return (
    <div className="App"> 
    <UseButton1 />
    <UseButton2 />
    </div>
  );
}

export default App;