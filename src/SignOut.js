import React from 'react'
import {auth} from './firebase_config';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function SignOut() {
    return  auth.currentUser && (
        <div>
        <button style={{backgroundColor: "transparent", border:"none", outline:"none" , padding:"1rem", cursor:"pointer"}} onClick={()=> auth.signOut()} >
        < ExitToAppIcon style={{ color: 'white', fontSize: "xx-large"  }} />
       </button>
        </div>
    )
}
