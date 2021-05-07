import React, {useState,useRef, useEffect} from 'react'

import {db,timestamp} from './firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessages from './ChatMessages';
import { IoRocketSharp } from "react-icons/io5";
import {auth} from './firebase_config';

export default function ChatRoom() {



    const messageRef = db.collection("messages");
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query,{idField : 'id'})
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
            

            <form onSubmit={sendMessage}>

                <input placeholder="message..." value={formValue} onChange={(e)=> setFormValue(e.target.value)}/>
               <button className="sendbtn" type='submit'> <IoRocketSharp />
                </button>
                </form>
        </div>
    )
}
