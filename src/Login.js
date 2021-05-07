import React from 'react';
import firebase from 'firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase_config';
import appimg from './appimg.svg'


export default function Login() {

    const [user] = useAuthState(auth);

    function SignIn(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    console.log("user" + user);

    return (
        <div className="loginContainer">
            <h1>Mu-chat</h1>
            <img className="appimg" src={appimg} alt="app-img" />
            <p>
                This is a chat app. As you can see the name of this chat app is Mu-chat, many of you are wondering what it means right??
                If you are from telangana state, you would have known.  . Mu-chat means gossip , discussion ... it has many other similar meanings too, in our telangana slang.
                . Okay now let's dive in. 
            </p>
            <button className="loginbtn" onClick={SignIn} >
             Sign-in with Google
            </button>
            
        </div>
    )
    
}

