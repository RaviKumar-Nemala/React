
export function CarsSearchComp( { handleCarSearch  , searchValue})
{

     return (
          <div className = "cars-search">
               <div>My Cars</div>
                <div className = "right-section">
                    <span>Search</span>
                    <input value = {searchValue} onChange = { (e) => { handleCarSearch(e.target.value) } } />
                </div>
          </div>
     )

}