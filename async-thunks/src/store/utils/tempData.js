import { User} from '../model/User'
let usersList = [] ;
usersList.push( new User('ravi' , 1 ) ) ;
usersList.push ( new User('kumar', 2) ) ;

let wait   =  ( duration)=>
{
     return new Promise( (resolve , reject) =>
     {
          setTimeout(() => {
               resolve();
          }, duration);    
     }
     )
}
export let getUsersList = async ()=>
{
     wait (500);
     console.log( usersList ) ;
     return ;
}