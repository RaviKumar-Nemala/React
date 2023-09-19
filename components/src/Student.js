
//all the props are will be passed as the object ;

function get_styling ()
{
     let style = { 
          color : 'black' ,
          backgroundColor : 'white' , 
          fontSize : '16px' , 
          border : '2px solid blue',
          marginBottom:'10px',
          paddingLeft:'5px'
          };

     return style;
}

function GetStudent ( props )
{
     //customize the css;
     let style = get_styling();
     return (
          <div style = {style}>
          <h2>Student Name =  { props.student_name}</h2>
          <h2 >Roll No  =  { props.roll_no } </h2>
          </div>
     )
}
export default GetStudent;