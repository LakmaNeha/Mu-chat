import React, {useState, useEffect} from 'react'
import ChatRoom from './ChatRoom';
import {db} from './firebase_config';
import { Divider,  List } from '@material-ui/core';

export default function CreateGroups( {collectionName,setCollectionName}) {
    const [add, setAdd] = useState(false);
    const [groupName ,setGroupName] = useState('');
   
    const [rooms, setRooms] = useState (null);


  useEffect (()=>{
    db.collection('rooms').onSnapshot(serverUpdate => {
     
      const rooms = serverUpdate.docs.map(_doc =>{
     
        const data = _doc.data();
        data['id'] =_doc.id;
        return data;
      });
      console.log(rooms);
      setRooms(rooms);
    });
 },[]);

 
    function createNewGroup(){
         setAdd(true)
    }

    const create= async(e) => {
        e.preventDefault();
        if(groupName.trim().length===0){
            
        }
        else{
          console.log(groupName);
         

          await  db.collection("rooms").add({
              room: groupName
          });
         
          setGroupName("")
          setAdd(false)
        }
    }

    const enterRoom = (collectionName) =>{
        
        setCollectionName(collectionName);
    }
    function hideForm(){
        setAdd(false)
    }

    if(rooms){
    return (
      <div>
            <div className={ collectionName  ? "hide" : "backdrop"}>
            <h2 style={{color: "white", textAlign: "center"}}>create a new room</h2>
            <button className="addbtn" onClick={createNewGroup} >+</button>
            { add ?  
                <form className="createForm" onSubmit={create}>
                <input placeholder="Group name..."value={groupName} onChange={(e)=> setGroupName(e.target.value)} />
                <button className="cancelBtn" onClick={hideForm}>❌</button>
               <div> <button className="saveBtn" type='submit'>Save</button>
               </div>
               
                </form> :
                null
            }
            <List>
               {
                 rooms.map((_room , _index) => {
                 return(
                     <div onClick={() => enterRoom(_room)} style={{cursor: "pointer"}}>
                        <div className="listOfRooms" key={_index} >
                         
                         {_room.room}
                    
                        </div>

                        <Divider></Divider>
                    </div>     
                                )
                            })
                        }
            </List>
          
            
            </div>

         
            {console.log("collectionName"+collectionName)}
            {console.log(rooms)}
            {collectionName  && <ChatRoom collectionName={collectionName} /> }
            
    
      </div>
    )
        }
    else {
        return(<div></div>)
    }    
}
