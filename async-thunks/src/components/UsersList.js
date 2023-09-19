import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { fetchUserThunk} from  '../store/thunks/fetchUser'
import { useState , useEffect} from 'react';
import { createUserThunk} from '../store/thunks/createUser'
import { userRemoveThunk } from '../store/thunks/deleteUser'
import { AlbumsList } from './AlbumsList';
import { ExpandedPanel } from './ExpandedPanel';
import { fetchAlbums } from'../store/thunks/fetchAlbums';

function UserItem( {user , removeUserHandler})
{
     console.log( user.id , user.name);
     let myStyles = {  padding: '10px'};

     return  (<div style = { { paddingTop:'10px'}}>
          <span style = {myStyles} >{user.id}</span>
          <span style = { myStyles } >{user.name}</span>
          <button style = { { ...myStyles, marginLeft :'40px', cursor:'pointer'} } onClick = { ()=> { removeUserHandler(user) } }>Remove</button>
     </div>);
}

export function UsersList ()
{
     let dispatch = useDispatch();
     
     let [ isLoadingUser , setLoadingUser] =  useState( false );

     let [ loadingUserError , setLoadingUserError] =  useState (  false );

     let [ isCreatingUser ,  setCreatingUser] = useState( false );

     let [ creatingUserError , setCreatingUserError] = useState( false ) ;

     let {data}  = useSelector((state)=> {
          return state.users
     })

     useEffect( ()=>
     {
          setLoadingUser( true ) ;
          dispatch ( fetchUserThunk() ) 
          dispatch( fetchAlbums())
          .unwrap()
          .catch( (err ) =>
          { 
               setLoadingUserError( true ) ;
          })
          .finally( () => setLoadingUser( false ) );
     }, [dispatch] ); 

     
     let handleAddUser = () => 
     {
          setCreatingUser( true ) ;
          dispatch ( createUserThunk() )
          .unwrap()
          .catch ( (err)=>
          { 
               setCreatingUserError( true ) ;
          }
          )
          .finally( ()=> setCreatingUser( false ));
     }
     let removeUserHandler = (user)=>
     {  
          dispatch(userRemoveThunk(user));
     }
     
     let content ;

     if ( isLoadingUser)
     {
          return <div>Loading the user</div>
     }
     else if ( loadingUserError )
     {
          return <div> Error while loadng the user</div>
     }
     else
     {
          content =  data.map ( (curr_user) => {
               console.log ( curr_user);
               let userItem = <UserItem user = { curr_user} removeUserHandler={removeUserHandler} />

               return (<ExpandedPanel header = {userItem} >
                    <AlbumsList userId = {curr_user.id} />
               </ExpandedPanel>)
          })
     }
     return(<div>
               <div>
                    <span > UsersList </span>
                    <span>
                         { isCreatingUser ? '...Creating User ' : <button onClick = { handleAddUser }> Add User </button>  }
                         { creatingUserError && '... Error while Creating User'}  
                    </span>
               </div> 
               <div>
                    { content} 
               </div>
          </div>
          )
}