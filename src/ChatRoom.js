import React, {useState,useRef, useEffect} from 'react'

import {db,timestamp} from './firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessages from './ChatMessages';
import { IoRocketSharp } from "react-icons/io5";
import {auth} from './firebase_config';

export default function ChatRoom( {collectionName}) {



    const messageRef = db.collection("messages");
    const query = messageRef.where("roomName", "==", collectionName);
    const [messages] = useCollectionData(query,{idField : 'id'})
   if(messages){
    messages.sort((a, b) => {
        return a.createdAt - b.createdAt;
    });
   }
   
    const [formValue ,setFormValue] = useState('');
    const dummy = useRef();
    
    useEffect(() => {

        dummy.current.scrollIntoView({ behavior: 'smooth' }); 

    })
    const sendMessage = async(e) => {

        e.preventDefault();

        if(formValue.trim().length===0){
            
        }
        else{
       

        const { uid, photoURL } = auth.currentUser;


        await messageRef.add({
            text: formValue,
            roomName: collectionName,
            createdAt:  timestamp(),
            uid,
            photoURL
        })
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
        
    }


    
    console.log("authCurrentUser" + auth.currentUser);
    }
    return (
        <div>
            
            <div className="scroll">
              { messages && messages.map(msg => <ChatMessages key={msg.id} message={msg} photo={msg.photoURL}/>) }
              <span ref={dummy}></span>
              
            </div>

            {console.log("msg" + messages)}
            

            <form className="msgform" onSubmit={sendMessage}>

                <input className="msginput" placeholder="message..." value={formValue} onChange={(e)=> setFormValue(e.target.value)}/>
               <button className="sendbtn" type='submit'> <IoRocketSharp />
                </button>
                </form>
        </div>
    )
}
