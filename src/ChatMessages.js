import React from 'react'
import {auth} from './firebase_config';


export default function ChatMessages( props ) {

   const { text, uid, photoURL } = props.message;
  

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    console.log("authcurr" + auth.currentUser);
    return (
       
         
              <div className = { `message  ${messageClass} `}>
            <img  className='round-picture' src={photoURL} alt='profile' />
            <p>{text}</p>
            
          </div>
             
        
    )
}
