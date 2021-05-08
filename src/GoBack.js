import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function GoBack({collectionName, setCollectionName} ) {

    function exitRoom (){
        setCollectionName(null);
    }

    return (
        <div>
            {console.log("GoBack-collectionName" + collectionName)}
             <button 
            onClick={exitRoom}
            style={{backgroundColor: "transparent", border:"none", outline:"none" , padding:"1rem", cursor:"pointer"}}>
            < ArrowBackIcon style={{ color: 'white', fontSize: "xx-large"  }} /></button>
            
        </div>
    )
}
