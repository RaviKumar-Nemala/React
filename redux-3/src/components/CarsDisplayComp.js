
function GetCarComp( {car , handleCarRemove , boldStatus})
{
     let boldClass  = { fontSize : '20px', fontWeight : 'bold'};
     
     let innerConent ;
     if( boldStatus )
     {    
          innerConent =  <span>
          <p style = {boldClass}>{car.getCarName()}</p>
          <p>{car.getPrice()}</p>
     </span>
     }
     else 
     {
          innerConent = <span>
               <p >{car.getCarName()}</p>
               <p>{car.getPrice()}</p>
          </span>     
     }
     return ( <div>
               {innerConent}
               <button onClick = { ()=>{ handleCarRemove( car ) } }> Delete </button>
             </div>)

}
export function CarsDisplayComp({carsList , boldStyles , handleCarRemove })
{

     let renderedComps = carsList.map ((car,index)=>{ 

          if ( boldStyles.indexOf(index) != -1)
          {
               console.log('bold has to apply')
               return <GetCarComp car = {car} handleCarRemove = { handleCarRemove} boldStatus={true} />
          }
          else 
          {
               return <GetCarComp car = {car} handleCarRemove = { handleCarRemove} boldStatus={false} />
          }

     })

     return ( <div className ="cars-list">{renderedComps}</div>);
}